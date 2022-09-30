import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import { convertBooleanToAvailability } from "../../utils/convertBooleanToAvailability"
import { FormProductDetails, Product } from "../global/types"
import "./ProductDetailsForm.css"

export const ProductDetailsForm = (props: {product: Product}) => {
    const { products, setProducts } = useContext(ProductsContext)

    const { product } = props
    const { id, name, price, stock, status, description } = product

    const [isInputDisabled, setIsInputDisabled] = useState(true)

    const availability = convertBooleanToAvailability(status)
    const floatPrice = price / 100

    const [values, setValues] = useState<FormProductDetails>({
        nameDetailsForm: name,
        priceDetailsForm: floatPrice,
        stockDetailsForm: stock,
        statusDetailsForm: availability,
        descriptionDetailsForm: description
    })

    const handleEditClick = (e: FormEvent): void => {
        e.preventDefault()
        setIsInputDisabled(false)
    }

    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const targetName = e.currentTarget.name
        const newValue = e.currentTarget.value

        setValues({
            ...values,
            [targetName]: newValue
        })
    }

    const handleSaveClick = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const { data: updatedProduct } = await axios.put(`http://localhost:3333/products/${id}`, {
                name: values.nameDetailsForm,
                price: Number(values.priceDetailsForm),
                stock: Number(values.stockDetailsForm),
                description: values.descriptionDetailsForm
            })
            const updatedProducts = [...products.filter(product => product.id !== id), updatedProduct]
            setProducts(updatedProducts)
            setIsInputDisabled(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form id="product-details-form" onSubmit={handleSaveClick} autoComplete="off">
            <div className="column">
                <div className="input-container">
                    <label htmlFor="uuidDetailsForm">UUID</label>
                    <input name="uuidDetailsForm" id="uuidDetailsForm" value={id} disabled />
                </div>

                <div className="input-container">
                    <label htmlFor="nameDetailsForm">Product name</label>
                    <input name="nameDetailsForm" id="nameDetailsForm" value={values.nameDetailsForm} onChange={handleOnInputChange} disabled={isInputDisabled} required />
                </div>

                <div className="input-container">
                    <label htmlFor="priceDetailsForm">Unit price</label>
                    <input name="priceDetailsForm" id="priceDetailsForm" type="number" min="0.01" step="0.01" value={values.priceDetailsForm} onChange={handleOnInputChange} disabled={isInputDisabled} required />
                    <span>$USD</span>
                </div>

                <div className="input-container">
                    <label htmlFor="stockDetailsForm">Current stock</label>
                    <input name="stockDetailsForm" id="stockDetailsForm" type="number" min="0" value={values.stockDetailsForm} onChange={handleOnInputChange} disabled={isInputDisabled} required />
                    <span>{values.statusDetailsForm}</span>
                </div>
            </div>

            <div className="column">
                <div className="input-container">
                    <label htmlFor="descriptionDetailsForm">Description</label>
                    <textarea name="descriptionDetailsForm" id="descriptionDetailsForm" cols={25} rows={5} value={values.descriptionDetailsForm} onChange={handleOnInputChange} disabled={isInputDisabled} required></textarea>
                </div>

                <div className="buttons">
                    <Dialog.Close>Cancel</Dialog.Close>
                    <button onClick={handleEditClick} disabled={!isInputDisabled}>Edit</button>
                    <button type="submit" disabled={isInputDisabled}>Save</button>
                </div>
            </div>
        </form>
    )
}