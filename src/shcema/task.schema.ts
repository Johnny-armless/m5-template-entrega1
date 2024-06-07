import {z} from "zod";
const taskSchema = z.object({
    id: z.number().int().positive(),
    title: z.string().min(3),
    content: z.string().min(3),
    finished: z.boolean().default(false),
    categoryId: z.number().int().positive(),
  
})
const taskCreateSchema = taskSchema.omit({id:true, finished: true, categoryId: true})
export {taskSchema,taskCreateSchema};



