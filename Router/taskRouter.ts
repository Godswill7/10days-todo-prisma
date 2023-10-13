import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  getOneTask,
  updateTask,
} from "../controller/taskController";

const router = express.Router();

router.route("/create-task").post(createTask);
router.route("/:taskID/get-one-task").get(getOneTask);
router.route("/get-all-task").get(getAllTask);
router.route("/: taskID / delete -user").delete(deleteTask);
router.route("/:taskID/update").patch(updateTask);

export default router;
