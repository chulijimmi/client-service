import React from 'react';
import { Link } from 'gatsby';

export default function Discovery() {

  // const [statePeer, setStatePeer]: any = React.useState({})
  // React.useEffect(() => {
  //   server.on('welcome', (response: any) => {
  //     console.log('response', response)
  //   })
  // }, [])

  // React.useEffect(() => {
  //   server.on('disconnecting', (socket: any) => {
  //     console.log('disconnecting', socket);
  //   });
  
  //   server.on('disconnect', (socket: any) => {
  //     // socket.rooms.size === 0
  //     console.log('disconnect', socket);
  //   });

  // }, [])

  // React.useEffect(() => {
  //   async function makeCall() {
  //     const offer = await peerConnection.createOffer()
  //     await peerConnection.setLocalDescription(offer)
  //     server.emit('send', {'offer': offer})
  //   }

  //   makeCall()
  // }, [])

  // React.useEffect(() => {
  //   server.on('message', async (response: any) => {
  //     if(response.answer) {
  //       console.log('response:message', response)
  //       const remoteDesc = new RTCSessionDescription(response.answer);
  //       await peerConnection.setRemoteDescription(remoteDesc);
  //     }
  //   })
  // }, [])

  // React.useEffect(() => {
  //   // Listen for local ICE candidates on the local RTCPeerConnection
  //   // peerConnection.addEventListener('icecandidate', event => {
  //   //   if (event.candidate) {
  //   //     console.log('iceCandidateEvent', event)
  //   //     server.emit('new-ice-candidate', {iceCandidate: event.candidate})
  //   //   }
  //   // });

  //   // Listen for remote ICE candidates and add them to the local RTCPeerConnection
  //   // server.on('messageCandidate', async (response: any) => {
  //   //   if (response.iceCandidate) {
  //   //     console.log('listen:ice:candidates', response)
  //   //       try {
  //   //           await peerConnection.addIceCandidate(response.iceCandidate);
  //   //           console.log('addIceCandidate:peerConnection')
  //   //       } catch (e) {
  //   //           console.error('Error adding received ice candidate', e);
  //   //       }
  //   //   }
  //   // })

  //   // // Listen for connectionstatechange on the local RTCPeerConnection
  //   // peerConnection.addEventListener('connectionstatechange', event => {
  //   //   if (peerConnection.connectionState === 'connected') {
  //   //       // Peers connected!
  //   //       console.log('peers connections', event)
  //   //   }
  //   // });
  // })

  return (
    <>
      <h1>Discovery</h1>
      <Link to="/">Home</Link>
    </>
  );
}
