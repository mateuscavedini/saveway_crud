import { PrismaClient } from "@prisma/client"
import { CreatedProduct, ProductToCreate } from "../global/types"
import { convertFloatToInteger } from "../utils/convertFloatToInteger"

export class ProductServices {
    private prisma = new PrismaClient()
    
    async create(productToCreate: ProductToCreate): Promise<CreatedProduct> {
        const {name, price, stock, description} = productToCreate
        const status = stock > 0 ? true : false

        const result = await this.prisma.product.create({
            data: {
                name,
                price: convertFloatToInteger(price),
                stock,
                status,
                description
            }
        })

        return result
    }
}