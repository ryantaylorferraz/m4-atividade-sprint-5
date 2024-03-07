import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

interface IValidateBody {
    body?: AnyZodObject,
    params?: AnyZodObject,
    query?: AnyZodObject,
}

export class ValidateBodyCreate {
    static execute(schemas: IValidateBody){
        return async (req: Request, res: Response, next: NextFunction) => {
                if(schemas.body){
                    req.body = await schemas.body.parseAsync(req.body)
                }
                if(schemas.params){
                    req.params = await schemas.params.parseAsync(req.params)
                }
                if(schemas.query){
                    req.query = await schemas.query.parseAsync(req.query)
                }
                next();
        }
    }
}