import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

export const productRoutes = Router()
const productController = new ProductController()

productRoutes.post("/", productController.createProduct)