export interface Product {
    name: string,
    price: number,
    stock: number,
    description: string
}

export interface ProductWithStatus extends Product {
    status: boolean
}