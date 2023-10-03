const express = require("express");
const server = require("http").createServer();
const app = express();

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

server.on("request", app);

server.listen(3000, function () {
  console.log("Server started at 3000");
});

//WEB SOCKETS!

const WebSocketServer = require("ws").Server;

const wss = new WebSocketServer({ server: server });

//events
wss.on("connection", (ws) => {
  const numClients = wss.clients.size;
  console.log("clients connected to sv websocket", numClients);
  wss.broadcast(`New user connected, total: ${numClients}`);

  if (ws.readyState === ws.OPEN) {
    ws.send("Welcome to my server");
  }

  ws.on("close", () => {
    console.log("A client has disconnected");
    wss.broadcast(`user disconneted`);
  });
});

wss.broadcast = (data) => {
  wss.clients.forEach((c) => c.send(data));
};
