import express from "express";
import router from "./router.js";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

//CUSTOM
import { initSwagger } from "../documentation/swagger.js";

// import "./db"; //executes db
// import "./websockets"; //executes wb sockets

//init server
const app = express();
//init swagger open api docs
initSwagger(app, "/docs");
//init morgan logger
app.use(morgan("dev"));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handle client
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
  // res.sendFile("../index.html", { root: __dirname });
});

//handle api routes
app.use("/api", router);

app.listen(3000, function () {
  console.log("Server started at 3000");
});

process.on("SIGINT", () => {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit(0);
});
