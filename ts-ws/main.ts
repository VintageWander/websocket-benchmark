import WebSocket from "ws";

const port = process.argv.length > 2 ? parseInt(process.argv[2]) : 9001;

const wsServer = new WebSocket.Server({ port }, () => {
  console.log(
    `Listening to port ${port}. Use extra argument to define the port`
  );
});

wsServer.on("connection", (ws) => {
  ws.on("message", (data, isBinary) => {
    ws.send(data, { binary: isBinary });
  });
  ws.on("error", (e) => console.error(e));
});
