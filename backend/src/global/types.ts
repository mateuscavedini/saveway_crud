export interface RawProduct {
    name: string,
    price: number,
    stock: number,
    description: string
}

export interface FullProduct extends RawProduct {
    status: boolean
}