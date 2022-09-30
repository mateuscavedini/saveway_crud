import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { Product } from "../global/types"
import { convertBooleanToAvailability } from "../utils/convertBooleanToAvailability"
import { ProductDetailsModal } from "./ProductDetailsModal"

export const ProductCard = (props: { product: Product }) => {
    const { products, setProducts } = useContext(ProductsContext)

    const { product } = props
    const { id, name, status, stock } = product

    const availability = convertBooleanToAvailability(status)

    const handleDeleteProduct = async (id: string): Promise<void> => {
        try {
            const { data: deletedProduct } = await axios.delete(`http://localhost:3333/products/${id}`)
            const updatedProducts = products.filter(product => product.id !== deletedProduct.id)
            setProducts(updatedProducts)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <tr className="product-card">
            <td>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <img src="/icons/icon_file.svg" alt="file icon" />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="overlay" />
                        <ProductDetailsModal product={product} />
                    </Dialog.Portal>
                </Dialog.Root>
            </td>
            <td>{name}</td>
            <td>{availability}</td>
            <td>{stock}</td>
            <td><img src="/icons/icon_trash.svg" alt="trash icon" onClick={() => handleDeleteProduct(id)} /></td>
        </tr>
    )
}