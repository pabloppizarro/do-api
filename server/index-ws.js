const express = require("express");
const server = require("http").createServer();
const morgan = require("morgan");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

var options = {
  explorer: true,
};
//init server
const app = express();
//init morgan logger
app.use(morgan("dev"));

//init swagger documentation.
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

//handle client
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
  // res.sendFile("../index.html", { root: __dirname });
});

app.get("/me", function (req, res) {
  res.send({
    name: "Pablo Pizarro",
  });
});

server.on("request", app);

server.listen(3000, function () {
  console.log("Server started at 3000");
});

process.on("SIGINT", () => {
  wss.clients.forEach((c) => {
    c.close();
  });
  server.close(() => {
    shutdownDB();
  });
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

//END WEBSOCKETS
//DATABase

const qlite = require("sqlite3");
const db = new qlite.Database(":memory:");

db.serialize(() => {
  db.run(`
    CREATE TABLE visitors (
      count INTEGER,
      time TEXT
    )

  `);
});
function getCounts() {
  db.each(
    `
    SELECT * FROM visitors 
  `,
    (err, row) => {
      console.log(row);
    }
  );
}
function shutdownDB() {
  getCounts();
  console.log("Shutting down DB");
  db.close();
}
