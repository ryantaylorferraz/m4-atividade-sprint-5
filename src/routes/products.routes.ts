import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", IsProductNameUnique.execute, productsControllers.createProduct);
