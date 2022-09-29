import * as Dialog from "@radix-ui/react-dialog"
import { NewProductForm } from "./NewProductForm/NewProductForm"
import React from "react"

export const AddNewProductModal = React.forwardRef(({}, ref) => {
    return (
        <Dialog.Content className="content">
            <Dialog.Title>Add new product</Dialog.Title>
            <NewProductForm />
        </Dialog.Content>
    )
})
