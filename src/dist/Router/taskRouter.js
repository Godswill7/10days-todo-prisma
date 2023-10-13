"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controller/taskController");
const router = express_1.default.Router();
router.route("/create-task").post(taskController_1.createTask);
router.route("/:taskID/get-one-task").get(taskController_1.getOneTask);
router.route("/get-all-task").get(taskController_1.getAllTask);
router.route("/: taskID / delete -user").delete(taskController_1.deleteTask);
router.route("/:taskID/update").patch(taskController_1.updateTask);
exports.default = router;
