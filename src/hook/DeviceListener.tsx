import { useEffect, useState } from 'react';

/**
 * useVideo
 * @returns {Array} MediaDeviceInfo Video
 */
export function useVideo() {
  const [device, setDevice] = useState<Array<MediaDeviceInfo>>();
  useEffect(() => {
    const getInformationDevice = async () => {
      const deviceLists = await navigator.mediaDevices.enumerateDevices();
      const videoInput = deviceLists.filter((i) => i.kind === 'videoinput');
      if (videoInput.length > 0) {
        setDevice(videoInput);
      }
    };
    getInformationDevice();
  }, []);

  return device;
}

/**
 * useAudio
 * @returns {Array} MediaDeviceInfo Audio
 */
export function useAudio() {
  const [device, setDevice] = useState<Array<MediaDeviceInfo>>();
  useEffect(() => {
    const getInformationDevice = async () => {
      const deviceLists = await navigator.mediaDevices.enumerateDevices();
      const videoInput = deviceLists.filter((i) => i.kind === 'audioinput');
      if (videoInput.length > 0) {
        setDevice(videoInput);
      }
    };
    getInformationDevice();
  }, []);

  return device;
}
