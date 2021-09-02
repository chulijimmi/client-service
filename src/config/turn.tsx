export default {
  iceServers: [
    {
      urls: 'stun:192.168.1.17:3478',
    },
    {
      urls: 'turn:192.168.1.17:3478',
      username: 'catnuxer',
      credential: 'catnuxer',
    },
  ],
};
