import { ProductsList } from "../ProductsList"
import * as Dialog from "@radix-ui/react-dialog"
import "./Catalog.css"
import { AddNewProductModal } from "../AddNewProductModal"

export const Catalog = () => {
    return (
        <section id="catalog">
            <h1>Catalog</h1>

            <label htmlFor="search-input">Product</label>
            <input id="search-input" placeholder="Search by name" />

            <ProductsList />

            <Dialog.Root>
                <Dialog.Trigger id="add-button">Add new</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="overlay"/>
                    <AddNewProductModal />
                </Dialog.Portal>
            </Dialog.Root>

        </section>
    )
}