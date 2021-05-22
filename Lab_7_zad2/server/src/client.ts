let socket = new WebSocket("ws://localhost:8080");
socket.onopen = function(e) {
  socket.send("Hello!");
};
socket.onmessage = function(event) {
  const msg = document.getElementById('messages')
  const item = document.createElement('li');
  item.textContent = event.data;
  msg?.appendChild(item);
};

document.getElementById('send').addEventListener('click', () => {
    socket.send((<HTMLInputElement>document.getElementById('msg')).value)
})