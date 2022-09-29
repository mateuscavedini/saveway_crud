import { PrismaClient } from "@prisma/client"
import { RawProduct, FullProduct } from "../global/types"
import { convertFloatToInteger } from "../utils/convertFloatToInteger"
import { convertStockToStatus } from "../utils/convertStockToStatus"

const prisma = new PrismaClient()

export class ProductServices {
    async getAll(): Promise<FullProduct[]> {
        const result: FullProduct[] = await prisma.product.findMany()
        return result
    }

    async create(productToCreate: RawProduct): Promise<FullProduct> {
        const { name, price, stock, description } = productToCreate

        const result: FullProduct = await prisma.product.create({
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

    async update(id: string, newInfo: RawProduct): Promise<FullProduct> {
        const { name, price, stock, description } = newInfo

        const updatedProduct: FullProduct = await prisma.product.update({
            where: {
                id
            },
            data: {
                name,
                price,
                stock,
                status: convertStockToStatus(stock),
                description
            }
        })

        return updatedProduct
    }

    async delete(id: string): Promise<void> {
        await prisma.product.delete({
            where: {
                id
            }
        })
    }
}