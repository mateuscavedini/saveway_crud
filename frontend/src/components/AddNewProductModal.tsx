import * as Dialog from "@radix-ui/react-dialog"
import React from "react"
import { NewProductForm } from "./NewProductForm/NewProductForm"

export const AddNewProductModal = React.forwardRef(({ }, ref) => {
    return (
        <Dialog.Content className="content">
            <Dialog.Title>Add new product</Dialog.Title>
            <NewProductForm />
        </Dialog.Content>
    )
})