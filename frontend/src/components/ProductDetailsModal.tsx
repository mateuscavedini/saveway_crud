import * as Dialog from "@radix-ui/react-dialog"
import React from "react"
import { Product } from "./global/types"
import { ProductDetailsForm } from "./ProductDetailsForm/ProductDetailsForm"

export const ProductDetailsModal = React.forwardRef((props: { product: Product }, ref) => {
    const { product } = props

    return (
        <Dialog.Content className="content">
            <Dialog.Title>Product details</Dialog.Title>
            <ProductDetailsForm product={product} />
        </Dialog.Content>
    )
})