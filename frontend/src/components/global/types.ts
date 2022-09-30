export interface Product {
    id: string,
    name: string,
    price: number,
    stock: number,
    status: boolean,
    description: string
}

export interface FormNewProduct {
    nameNewProductForm: string,
    priceNewProductForm: number,
    stockNewProductForm: number,
    descriptionNewProductForm: string
}

export interface FormProductDetails {
    nameDetailsForm: string,
    priceDetailsForm: number,
    stockDetailsForm: number,
    statusDetailsForm: string,
    descriptionDetailsForm: string
}

export interface ProductsContextInterface {
    products: Product[],
    setProducts: (products: Product[]) => void
}