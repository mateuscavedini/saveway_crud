import { PrismaClient } from "@prisma/client"
import { Product, ProductWithStatus } from "../global/types"
import { convertFloatToInteger } from "../utils/convertFloatToInteger"
import { convertStockToStatus } from "../utils/convertStockToStatus"

const prisma = new PrismaClient()

export class ProductServices {
    async getAll(): Promise<ProductWithStatus[]> {
        const result: ProductWithStatus[] = await prisma.product.findMany({
            orderBy: [
                {
                    status: "desc"
                },
                {
                    name: "asc"
                }
            ]
        })
        return result
    }

    async create(productToCreate: Product): Promise<ProductWithStatus> {
        const { name, price, stock, description } = productToCreate

        const result: ProductWithStatus = await prisma.product.create({
            data: {
                name,
                price: convertFloatToInteger(price),
                stock,
                status: convertStockToStatus(stock),
                description
            }
        })

        return result
    }

    async update(id: string, newInfo: Product): Promise<ProductWithStatus> {
        const { name, price, stock, description } = newInfo

        const updatedProduct: ProductWithStatus = await prisma.product.update({
            where: {
                id
            },
            data: {
                name,
                price: convertFloatToInteger(price),
                stock,
                status: convertStockToStatus(stock),
                description
            }
        })

        return updatedProduct
    }

    async delete(id: string): Promise<{id: string}> {
        const deletedProduct = await prisma.product.delete({
            where: {
                id
            }
        })

        return deletedProduct
    }
}