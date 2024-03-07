import { z } from "zod";

export const bodyCreate = z.object({
    id: z.number().positive(),
    name: z.string().min(2),
    description: z.string().min(20).max(250),
    category: z.string().optional(),
    price: z.number().min(0.01)
})


export const schemaCreate = bodyCreate.omit({id: true})

export const schemaUpdate = bodyCreate.omit({id: true}).partial();