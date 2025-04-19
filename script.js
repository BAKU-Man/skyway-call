const peer = new Peer({
  key: 'wV5F6ipJkNMjteDw='  // ここに実際のキーを貼ってください
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
