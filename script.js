const peer = new Peer({
  key: import.meta.env.VITE_SKYWAY_API_KEY
});

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    document.getElementById('my-video').srcObject = stream;

    const roomId = location.pathname.split("/").pop();
    const room = peer.joinRoom(roomId, { mode: 'sfu', stream });

    room.on('stream', remoteStream => {
      document.getElementById('remote-video').srcObject = remoteStream;
    });
  });
