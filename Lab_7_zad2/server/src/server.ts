import * as http from "http";
import * as websocket from "ws";

const server = http.createServer();

let data: (null | 1 | 0)[] = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  0,
  null,
];
let helloPlayer = -1;

const checkGame = () => {
  for (let i = 0; i < 9; i += 3) {
    if (data[i] !== null)
      if (data[i] === data[i + 1] && data[i + 1] === data[i + 2])
        return data[i];
  }
  for (let i = 0; i < 3; i++) {
    if (data[i] !== null)
      if (data[i] === data[i + 3] && data[i + 3] === data[i + 6])
        return data[i];
  }
  if (data[0] !== null)
    if (data[0] === data[4] && data[4] === data[8]) return data[0];
  if (data[2] !== null)
    if (data[2] === data[4] && data[4] === data[6]) return data[2];

  return null;
};

const clearData = () => {
  data = [null, null, null, null, null, null, null, null, null, 0, null];
};

const socket = new websocket.Server({ server });
socket.on("connection", function connection(ws) {
  ws.on("message", function incoming(inc) {
    console.log(inc.toString());
    data = JSON.parse(inc.toString());
    data[9]++;
    if (data[9] > 1) data[9] = 0;
    data[10] = checkGame();
    broadcast(JSON.stringify(data));
    if (data[10] != null) {
      clearData();
    }
    for (let i = 0; i < 9; i++) {
      if (data[i] == null) return;
    }
    clearData();
  });

  helloPlayer++;

  ws.send(JSON.stringify(helloPlayer % 2));
  ws.send(JSON.stringify(data));
});

function broadcast(data: any): void {
  socket.clients.forEach((client) => {
    client.send(data);
  });
}

server.listen(8080);
