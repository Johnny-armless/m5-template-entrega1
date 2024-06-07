import {z,AnyZodObject} from "zod"
import { taskCreateSchema,taskSchema } from "../shcema/task.schema"
type ITaskCreate = z.infer<typeof taskCreateSchema>
type ITask = z.infer<typeof taskSchema>
export {ITaskCreate,ITask};