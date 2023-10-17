import express from "express";
import router from "./router.js";
import morgan from "morgan";
import cors from "cors";

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("../swagger");

import * as dotenv from "dotenv";
dotenv.config();

// import "./db"; //executes db
// import "./websockets"; //executes wb sockets

var options = {
  explorer: true,
};
//init server
const app = express();
//init morgan logger
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init swagger documentation.
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

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

app.use("/dolar", router);

// app.on("request", app);

app.listen(3000, function () {
  console.log("Server started at 3000");
});

process.on("SIGINT", () => {
  //disconnect WS clients,
  //shutdown DB.
  // wss.clients.forEach((c) => {
  //   c.close();
  // });
  // server.close(() => {
  //   shutdownDB();
  // });
});
