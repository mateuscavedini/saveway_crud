import * as Dialog from "@radix-ui/react-dialog"
import { ProductDetailsForm } from "./ProductDetailsForm/ProductDetailsForm"
import React from "react"

export const ProductDetailsModal = React.forwardRef(({}, ref) => {
    return (
        <Dialog.Content className="content">
            <Dialog.Title>Product details</Dialog.Title>
            <ProductDetailsForm />
        </Dialog.Content>
    )
})