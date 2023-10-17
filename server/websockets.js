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
  db.run(`
    INSERT INTO visitors (count, time)
    VALUES(${numClients}, datetime('now'))
  `);
  ws.on("close", () => {
    console.log("A client has disconnected");
    wss.broadcast(`user disconneted`);
  });
});

wss.broadcast = (data) => {
  wss.clients.forEach((c) => c.send(data));
};
