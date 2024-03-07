import { z } from "zod";
import { bodyCreate, schemaCreate, schemaUpdate } from "../schemas/bodyCreate.schema";

// export interface IProduct{
//     id: number;
//     name: string;
//     description: string;
//     category?: string;
//     price: number;
// }


export type TProduct = z.infer<typeof bodyCreate>
export type TProductCreate = z.infer<typeof schemaCreate>
export type TProductUpdate = z.infer<typeof schemaUpdate>