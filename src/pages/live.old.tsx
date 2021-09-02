import React from 'react';
import { Link } from 'gatsby';
import DeviceOptions from '../component/DeviceOptions';

type constraintsType = {
  video: boolean;
  audio: boolean;
};

const config = [
  {
    urls: 'stun:192.168.1.13:3478',
  },
  {
    urls: 'turn:192.168.1.13:3478',
    username: 'catnuxer',
    credential: 'catnuxer',
  },
];
const rtcPeerConnection = new RTCPeerConnection({ iceServers: config });

export default function Live() {
  const streamRef = React.useRef<HTMLVideoElement>(null);
  const [audioDevices, setAudioDevices] =
    React.useState<Array<MediaDeviceInfo>>();
  const [cameraDevices, setCameraDevices] =
    React.useState<Array<MediaDeviceInfo>>();
  let stream = navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  let devices = navigator.mediaDevices.enumerateDevices();

  async function initMedia() {
    try {
      if (null != streamRef.current) {
        streamRef.current.srcObject = await stream;
        streamRef.current.onloadedmetadata = () => streamRef.current?.play();
      }
    } catch (err) {
      /* handle the error */
      console.log('errorCallback', err);
    }
  }

  React.useEffect(() => {
    initMedia();
  }, []);

  React.useEffect(() => {
    const getNumerateDevice = async () => {
      const device = await devices;
      const audioItems = device.filter((i) => i.kind === 'audioinput');
      const cameraItems = device.filter((i) => i.kind === 'videoinput');
      if (audioItems.length > 0 && cameraItems.length > 0) {
        setAudioDevices(audioItems);
        setCameraDevices(cameraItems);
      }
    };
    getNumerateDevice();
  }, []);

  async function toogleDevice(active: boolean) {
    try {
      const currentStream = await stream;
      currentStream.getTracks().forEach((track) => {
        track.enabled = active ? false : true;
      });
    } catch (err) {
      /* handle the error */
      console.log('errorCallback', err);
    }
  }

  const mute = React.useCallback(() => {
    toogleDevice(true);
  }, [stream]);

  const unmute = React.useCallback(() => {
    toogleDevice(false);
  }, [stream]);

  const checkTurn = React.useCallback(() => {
    rtcPeerConnection.onicecandidate = (event) => {
      console.log('oniceCandidate', event.candidate?.type);
    };
    rtcPeerConnection.onicecandidateerror = (error) => {
      console.log('oniceCandidateError', error);
    };
    rtcPeerConnection.createDataChannel('test:from:hp');
    rtcPeerConnection.createOffer().then((offer) => {
      console.log('createOffer', offer);
      rtcPeerConnection.setLocalDescription(offer);
    });
  }, [stream]);

  const checkNavigator = React.useCallback(() => {
    console.log(window.navigator);
  }, []);

  return (
    <>
      <h1>Live</h1>
      <Link to="/">Home</Link>
      <div id="button" style={{ margin: 10 }}>
        <button
          style={{
            marginRight: 10,
          }}
          onClick={mute}
        >
          Mute
        </button>
        <button
          style={{
            marginRight: 10,
          }}
          onClick={unmute}
        >
          Unmute
        </button>
        <button
          style={{
            marginRight: 10,
          }}
          onClick={checkTurn}
        >
          Turn
        </button>
        <button
          style={{
            marginRight: 10,
          }}
          onClick={checkNavigator}
        >
          Navigator
        </button>
      </div>
      <div id="device">
        <DeviceOptions data={audioDevices} />
        <DeviceOptions data={cameraDevices} />
      </div>
      <div id="videoContainer">
        <video
          id="localVideo"
          autoPlay={true}
          playsInline={true}
          controls={false}
          ref={streamRef}
        />
      </div>
    </>
  );
}
