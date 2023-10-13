import express, { Application, Request, Response } from "express";
import { mainApp } from "./mainApp";

const port: number = 1234;

const app: Application = express();
mainApp(app);

const Server = app.listen(port, () => {
  console.log();
  console.log("server is active 🦾🦾🦾",port)
});

process.on("uncaughtException", (error: Error) => {
  console.log("error due to uncaughtException", error);
  process.exit();
});
process.on("unhandleRejection", (reason: any) => {
  console.log("error due to unhandleRejection", reason);
  Server.close(() => {
    process.exit(1);
  });
});
