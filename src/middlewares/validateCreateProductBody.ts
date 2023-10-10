import { NextFunction, Request, Response } from "express";
import { createProductBodySchema } from "../schemas/createProductBody.schema";

export class ValidateCreateProduct{
    static execute(req: Request, res: Response, next: NextFunction){
        try {
            createProductBodySchema.parse(req.body);

            next();
        } catch (error) {
            return res.status(409).json({ error: "Product body is not valid."});
        }
    }
}