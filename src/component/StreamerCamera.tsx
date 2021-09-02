import React from 'react';
export default function StreamerCamera() {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    const param = {
      audio: true,
      video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 576, ideal: 720, max: 1080 },
      },
    };

    async function getMedia(constraints: any) {
      let stream = null;

      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log('stream', stream);
        /* use the stream */
      } catch (err) {
        /* handle the error */
      }
    }

    getMedia(param);
  });
  return (
    <>
      <h1>StreamerCamera</h1>
    </>
  );
}
