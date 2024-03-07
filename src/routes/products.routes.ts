import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { ValidateBodyCreate } from "../middlewares/ValidateBodyCreate.middleware";
import { bodyCreate } from "../schemas/bodyCreate.schema";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", ValidateBodyCreate.execute({body: bodyCreate}), IsProductNameUnique.execute, productsControllers.createProduct);
