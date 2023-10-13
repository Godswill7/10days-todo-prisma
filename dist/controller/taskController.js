"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.deleteAllTask = exports.getOneTask = exports.getAllTask = exports.createTask = void 0;
const client_1 = require("@prisma/client");
const mainError_1 = require("../error/mainError");
const prisma = new client_1.PrismaClient();
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, dueDate, assignedTo } = req.body;
        const task = yield prisma.task.create({
            data: {
                title,
                description,
                dueDate,
                assignedTo,
                completed: false,
            },
        });
        return res.status(mainError_1.HTTP.CREATE).json({
            message: "Task created successfully",
            data: task
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Task cannot created",
            data: error.message
        });
    }
});
exports.createTask = createTask;
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield prisma.task.findMany({});
        return res.status(mainError_1.HTTP.OK).json({
            message: " All Task found successfully",
            data: task,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: " All Task cannot be found",
            data: error.message,
        });
    }
});
exports.getAllTask = getAllTask;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const task = yield prisma.task.findUnique({
            where: {
                id: taskID,
            },
        });
        return res.status(mainError_1.HTTP.OK).json({
            message: "Task found successfully",
            data: task,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Task cannot be found",
            data: error.message,
        });
    }
});
exports.getOneTask = getOneTask;
const deleteAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield prisma.task.deleteMany({});
        return res.status(mainError_1.HTTP.OK).json({
            message: "All Task deleted successfully",
            data: task,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "All Task cannot be found deleted",
            data: error.message,
        });
    }
});
exports.deleteAllTask = deleteAllTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const { title, description, assignedTo } = req.body;
        const task = yield prisma.task.update({
            where: {
                id: taskID,
            },
            data: {
                title,
                description,
                assignedTo
            },
        });
        return res.status(mainError_1.HTTP.OK).json({
            message: "Task deleted successfully",
            data: task,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Task cannot be found deleted",
            data: error.message,
        });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const task = yield prisma.task.delete({
            where: {
                id: taskID,
            },
        });
        return res.status(mainError_1.HTTP.OK).json({
            message: "Task deleted successfully",
            data: task,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD).json({
            message: "Task cannot be found deleted",
            data: error.message,
        });
    }
});
exports.deleteTask = deleteTask;
