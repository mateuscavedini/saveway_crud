import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { useEffect, useState } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import { AddNewProductModal } from "../AddNewProductModal"
import { Product } from "../global/types"
import { ProductsList } from "../ProductsList"
import "./Catalog.css"

export const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([])
    const value = {
        products,
        setProducts
    }

    useEffect(() => {
        axios.get("http://localhost:3333/products")
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, [JSON.stringify(products)])

    return (
        <ProductsContext.Provider value={value}>
            <section id="catalog">
                <h1>Catalog</h1>

                <ProductsList />

                <Dialog.Root>
                    <Dialog.Trigger id="add-button">Add new</Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="overlay" />
                        <AddNewProductModal />
                    </Dialog.Portal>
                </Dialog.Root>
            </section>
        </ProductsContext.Provider>
    )
}