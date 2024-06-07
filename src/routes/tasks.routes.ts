import { Router} from "express";
import { TaskControllers } from "../controllers/task.controllers";
export const taskRouter = Router()
const taskControllers = new TaskControllers();

taskRouter.post("/tasks",taskControllers.create);
