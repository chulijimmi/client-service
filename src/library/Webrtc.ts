/**
 * Library Webrtc
 * @return {Object}
 */
class Webrtc {
  public wsConnection: WebSocket | undefined;
  public clientId = 0;
  public mediaConstraints = {
    audio: true,
    video: {
      aspecRatio: {
        ideal: 1.333333, // 3:2 aspect is preferred
      },
    },
  };
  public username: string | null = null;
  public targetUsername: string | null = null; // To store username of other peer
  public peerConnection: RTCPeerConnection; // RTCPeerConnection
  public transceiver: RTCRtpTransceiver | null = null; // RTCRtpTransceiver
  public webcamStream: MediaStream | null = null; // MediaStream from webcam

  /**
   * @actions Webrtc Constructor, setup this.peerConnection and this.wsConnection
   * @param {string} wsUrl WebSocketURL
   * @param {object} turnConfig Turn Configuration iceServers
   */
  constructor(wsUrl: string, turnConfig: object) {
    this.peerConnection = new RTCPeerConnection(turnConfig);
    this.wsConnection = new WebSocket(wsUrl);
  }

  private log(stage: string, message: string) {
    const time = new Date();
    console.log(`[${time.toLocaleTimeString()}] ${stage} ${message}`);
  }

  public sendToServer(message: object) {
    const json = JSON.stringify(message);
    this.log('sendToServer', `json ${json}`);
    if (this.wsConnection !== undefined) {
      this.wsConnection.send(json);
    }
  }

  /**
   * setUsername and send to server
   * @param {string} username Username
   */
  public setUsername(username: string) {
    this.username = username;
    this.sendToServer({
      name: this.username,
      date: Date.now(),
    });
  }

  public async createPeerConnection() {
    this.log('createPeerConnection', 'initializing connections ...');
    this.peerConnection.onicecandidate = this.handleICECandidateEvent;
    this.peerConnection.oniceconnectionstatechange =
      this.handleICEConnectionStateChangeEvent;
    this.peerConnection.onicegatheringstatechange =
      this.handleICEGatheringStateChangeEvent;
    this.peerConnection.onsignalingstatechange =
      this.handleSignalingStateChangeEvent;
    this.peerConnection.onnegotiationneeded = this.handleNegotiationNeededEvent;
  }

  public async handleICECandidateEvent() {
    this.peerConnection.onicecandidate = (event) => {
      this.log('handleICECandidateEvent', `${event.candidate?.candidate}`);
      this.sendToServer({
        type: 'new-ice-candidate',
        target: this.targetUsername,
        candidate: event.candidate,
      });
    };
  }

  public async handleICEConnectionStateChangeEvent() {
    const state = this.peerConnection.iceConnectionState;
    switch (state) {
      case 'closed':
      case 'failed':
      case 'disconnected':
        this.closeVideoCall();
        break;

      default:
        this.log('handleICEConnectionStateChangeEvent: ', `is ${state}`);
        break;
    }
  }

  public closeVideoCall() {
    this.log('closeVideoCall', 'close connection');
  }

  public async handleICEGatheringStateChangeEvent() {
    const message = 'ICE gathering state changed to: ';
    const state = JSON.stringify(this.peerConnection.iceConnectionState);
    this.log('handleICEGatheringStateChangeEvent', `${message} ${state}`);
  }

  public async handleSignalingStateChangeEvent() {
    if (this.peerConnection !== null) {
      const state = this.peerConnection.signalingState;
      switch (state) {
        case 'closed':
          this.closeVideoCall();
          break;
        case 'stable':
          this.log('signalingState', state);
          break;

        default:
          this.log('signalingState', state);
          break;
      }
    }
  }

  public async handleNegotiationNeededEvent() {
    try {
      const offer = await this.peerConnection.createOffer();
      if (this.peerConnection.signalingState != 'stable') {
        this.log(
          'error-handleNegotiationNeededEvent',
          `The connection isn't stable yet; postponing`,
        );
        return;
      }
      await this.peerConnection.setLocalDescription(offer);
      this.sendToServer({
        name: this.username,
        target: this.targetUsername,
        type: 'video-offer',
        sdp: this.peerConnection.localDescription,
      });
    } catch (error) {
      this.log('error-handleNegotiationNeededEvent', JSON.stringify(error));
    }
  }
}

export default Webrtc;

type wsType = {
  url: string;
  protocol: string;
};

type turnConfig = {
  urls?: string;
  username?: string;
  credential?: string;
};

type turnType = {
  iceServers: Array<turnConfig>;
};

export const useWebrtc = (ws: wsType, turn: turnType) => {
  const rtc = new Webrtc(ws.url, turn);
  return {
    wsConnection: rtc.wsConnection,
    peerConnection: rtc.peerConnection,
  };
};
