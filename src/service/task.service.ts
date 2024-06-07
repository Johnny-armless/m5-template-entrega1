import {prisma} from "../database/prisma"
import { taskSchema } from "../shcema/task.schema"
import { ITaskCreate,ITask } from "../interfaces/task.interfaces"
export class TaskService{
    public create = async (payload:ITaskCreate):Promise<ITask> =>{
        const newTask = await prisma.task.create({data:payload})
        return taskSchema.parse(newTask)
    }
}