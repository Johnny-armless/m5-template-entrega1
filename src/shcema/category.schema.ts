import {z} from "zod";

const categorySchema = z.object({

id: z.number().int().positive(),
name: z.string().min(3),

})

export {categorySchema};