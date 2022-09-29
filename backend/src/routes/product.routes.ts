import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

export const productRoutes = Router()
const productController = new ProductController()

productRoutes.get("/products", productController.getAllProducts)
productRoutes.post("/products", productController.createProduct)
productRoutes.put("/products/:id", productController.updateProduct)
productRoutes.delete("/products/:id", productController.deleteProduct)