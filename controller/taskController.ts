import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { HTTP } from "../error/mainError";

const prisma = new PrismaClient();

export const createTask = async(req:Request,res:Response) => {
try {
    
    const { title, description, dueDate, assignedTo } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        dueDate,
        assignedTo,
            completed: false,
      },
    });

    return res.status(HTTP.CREATE).json({
        message: "Task created successfully",
        data:task
    })

} catch (error:any) {
     return res.status(HTTP.BAD).json({
       message: "Task cannot created",
       data: error.message
     });
}
}

export const getAllTask = async (req: Request, res: Response) => {
    try {

        const task = await prisma.task.findMany({});

    return res.status(HTTP.OK).json({
      message: " All Task found successfully",
      data: task,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: " All Task cannot be found",
      data: error.message,
    });
  }
};

export const getOneTask = async (req: Request, res: Response) => {
    try {

      const {taskID} = req.params

        const task = await prisma.task.findUnique({
          where: {
            id: taskID,
          },
        });

    return res.status(HTTP.OK).json({
      message: "Task found successfully",
      data: task,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Task cannot be found",
      data: error.message,
    });
  }
};

export const deleteAllTask = async (req: Request, res: Response) => {
    try {

        const task = await prisma.task.deleteMany({ });

    return res.status(HTTP.OK).json({
      message: "All Task deleted successfully",
      data: task,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "All Task cannot be found deleted",
      data: error.message,
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
    try {

        const { taskID } = req.params;
        const { title, description, assignedTo } = req.body;

        const task = await prisma.task.update({
          where: {
            id: taskID,
          },
          data: {
            title,
            description,
            assignedTo
          },
        });

    return res.status(HTTP.OK).json({
      message: "Task deleted successfully",
      data: task,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Task cannot be found deleted",
      data: error.message,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {

      const {taskID} = req.params

        const task = await prisma.task.delete({
          where: {
            id: taskID,
          },
        });

    return res.status(HTTP.OK).json({
      message: "Task deleted successfully",
      data: task,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD).json({
      message: "Task cannot be found deleted",
      data: error.message,
    });
  }
};