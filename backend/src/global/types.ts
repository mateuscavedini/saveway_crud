export interface ProductToCreate {
    name: string,
    price: number,
    stock: number,
    description: string
}

export interface CreatedProduct extends ProductToCreate {
    id: string,
    status: boolean
}