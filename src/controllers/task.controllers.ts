import { Request, Response } from "express"
import { TaskService } from "../service/task.service";
export class TaskControllers{
create = async(req: Request, res: Response)=>{
    const taskService = new TaskService();
    const response = await taskService.create(req.body)
    return res.status(201).json(response)
}
}