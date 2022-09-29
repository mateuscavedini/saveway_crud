import { NextFunction, Request, Response } from "express";
import { RawProduct, FullProduct } from "../global/types";
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
            const productToCreate: RawProduct = req.body
            const createdProduct: FullProduct = await productServices.create(productToCreate)

            return res.status(201).json(createdProduct)
        } catch (error) {
            return next(error)
        }
    }

    async updateProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const productId = req.params.id
            const newProductInfo: RawProduct = req.body

            const updatedProduct: FullProduct = await productServices.update(productId, newProductInfo)

            return res.status(200).json(updatedProduct)
        } catch (error) {
            return next(error)
        }
    }

    async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const productId = req.params.id
            await productServices.delete(productId)

            return res.status(200).json("product deleted")
        } catch (error) {
            return next(error)
        }
    }
}