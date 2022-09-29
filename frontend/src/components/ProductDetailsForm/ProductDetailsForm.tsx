import * as Dialog from "@radix-ui/react-dialog"
import "./ProductDetailsForm.css"

export const ProductDetailsForm = () => {
    return (
        <form id="product-details-form">
            <div className="column">
                <div className="input-container">
                    <label htmlFor="uuidDetailsForm">UUID</label>
                    <input name="uuidDetailsForm" id="uuidDetailsForm" disabled/>
                </div>

                <div className="input-container">
                    <label htmlFor="nameDetailsForm">Product name</label>
                    <input name="nameDetailsForm" id="nameDetailsForm" disabled/>
                </div>

                <div className="input-container">
                    <label htmlFor="priceDetailsForm">Unit price</label>
                    <input name="priceDetailsForm" id="priceDetailsForm" type="number" disabled/>
                    <span>$USD</span>
                </div>

                <div className="input-container">
                    <label htmlFor="stockDetailsForm">Current stock</label>
                    <input name="stockDetailsForm" id="stockDetailsForm" type="number" disabled/>
                    <span>not available</span>
                </div>
            </div>

            <div className="column">
                <div className="input-container">
                    <label htmlFor="descriptionDetailsForm">Description</label>
                    <textarea name="descriptionDetailsForm" id="descriptionDetailsForm" cols={25} rows={5} disabled></textarea>
                </div>

                <div className="buttons">
                    <Dialog.Close>Cancel</Dialog.Close>
                    <button>Edit</button>
                    <button type="submit" disabled>Save</button>
                </div>
            </div>
            

        </form>
    )
}