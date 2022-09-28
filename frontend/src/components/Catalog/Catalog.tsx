import { ProductsList } from "../ProductsList"
import * as Dialog from "@radix-ui/react-dialog"
import "./Catalog.css"

export const Catalog = () => {
    return (
        <section id="catalog">
            <h1>Catalog</h1>

            <label htmlFor="search-input">Product</label>
            <input id="search-input" placeholder="Search by name" />

            <ProductsList />

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button id="add-button">Add new</button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="overlay"/>
                    <Dialog.Content className="content">
                        <Dialog.Title>Add new product</Dialog.Title>
                        <p>teste</p>
                        <Dialog.Close />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

        </section>
    )
}