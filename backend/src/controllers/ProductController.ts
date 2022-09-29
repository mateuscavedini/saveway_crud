import { NextFunction, Request, Response } from "express";
import { CreatedProduct, ProductToCreate } from "../global/types";
import { ProductServices } from "../services/ProductServices";

export class ProductController {
    private productServices = new ProductServices()

    async createProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const productToCreate: ProductToCreate = req.body
            const createdProduct: CreatedProduct = await this.productServices.create(productToCreate)

            return res.send(201).json(createdProduct)
        } catch (error) {
            return next(error)
        }
    }
}