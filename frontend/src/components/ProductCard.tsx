import * as Dialog from "@radix-ui/react-dialog"
import { ProductDetailsModal } from "./ProductDetailsModal"

export const ProductCard = () => {
    return (
        <tr id="product-card">
            <td>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <img src="/icons/icon_file.svg" alt="file icon" />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="overlay" />
                        <ProductDetailsModal />
                    </Dialog.Portal>
                </Dialog.Root>
            </td>
            <td>product001</td>
            <td>not available</td>
            <td>0</td>
            <td><img src="/icons/icon_trash.svg" alt="trash icon" /></td>
        </tr>
    )
}