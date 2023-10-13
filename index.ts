import express, { Application, Request, Response } from "express";
import { mainApp } from "./mainApp";
import env from "dotenv"
env.config()

const port: number = parseInt(process.env.PORT!);

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
