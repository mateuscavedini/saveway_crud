import { NextFunction, Request, Response } from "express";
import { Product, ProductWithStatus } from "../global/types";
import { ProductServices } from "../services/ProductServices";

const productServices = new ProductServices()

export class ProductController {
    async getAllProducts(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const products = await productServices.getAll()

            return res.status(200).json(products)
        } catch (error) {
            return next(error)
        }
    }

    async createProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const productToCreate: Product = req.body
            const createdProduct: ProductWithStatus = await productServices.create(productToCreate)

            return res.status(201).json(createdProduct)
        } catch (error) {
            return next(error)
        }
    }

    async updateProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const productId = req.params.id
            const newProductInfo: Product = req.body

            const updatedProduct: ProductWithStatus = await productServices.update(productId, newProductInfo)

            return res.status(200).json(updatedProduct)
        } catch (error) {
            return next(error)
        }
    }

    async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const productId = req.params.id
            const deletedProduct = await productServices.delete(productId)

            return res.status(200).json(deletedProduct)
        } catch (error) {
            return next(error)
        }
    }
}