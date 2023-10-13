"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = require("./mainApp");
const port = 1234;
const app = (0, express_1.default)();
(0, mainApp_1.mainApp)(app);
const Server = app.listen(port, () => {
    console.log();
    console.log("server is active 🦾🦾🦾", port);
});
process.on("uncaughtException", (error) => {
    console.log("error due to uncaughtException", error);
    process.exit();
});
process.on("unhandleRejection", (reason) => {
    console.log("error due to unhandleRejection", reason);
    Server.close(() => {
        process.exit(1);
    });
});
