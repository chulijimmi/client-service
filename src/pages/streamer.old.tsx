import React from 'react';
import { Link } from 'gatsby';

type constraintsType = {
  video: boolean;
  audio: boolean;
};
export default function Streamer() {
  const [stream, setStream] = React.useState<MediaStream>();
  const streamRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const openMediaDevices = async (constraints: constraintsType) => {
      return await navigator.mediaDevices.getUserMedia(constraints);
    };

    const changeInnerVideo = (el: HTMLVideoElement, value: MediaStream) => {
      el.srcObject = value;
    };

    const getVideo = async () => {
      const streamObj = await openMediaDevices({ video: true, audio: true });
      if (null != streamRef.current) {
        changeInnerVideo(streamRef.current, streamObj);
        setStream(streamObj);
      }
    };

    try {
      getVideo();
    } catch (error) {
      console.error('Error accessing media devices.', error);
    }
  }, []);

  React.useEffect(() => {
    if (null != stream) {
      console.log('stream', stream);
      console.log('getTrack', stream.getTracks());
    }
  }, [stream]);

  return (
    <>
      <h1>Streamer</h1>
      <Link to="/">Home</Link>
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
