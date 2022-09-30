import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import { FormNewProduct } from "../../global/types"
import "./NewProductForm.css"

export const NewProductForm = () => {
    const { products, setProducts } = useContext(ProductsContext)

    const [values, setValues] = useState<FormNewProduct>({
        nameNewProductForm: "",
        priceNewProductForm: 0.01,
        stockNewProductForm: 0,
        descriptionNewProductForm: ""
    })

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const targetName = e.currentTarget.name
        const newValue = e.currentTarget.value

        setValues({
            ...values,
            [targetName]: newValue
        })
    }

    const handleAddProduct = async (e: FormEvent): Promise<void> => {
        e.preventDefault()
        try {
            const { data: createdProduct } = await axios.post("http://localhost:3333/products", {
                name: values.nameNewProductForm,
                price: Number(values.priceNewProductForm),
                stock: Number(values.stockNewProductForm),
                description: values.descriptionNewProductForm
            })

            const updatedProducts = [...products, createdProduct]
            setProducts(updatedProducts)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form id="add-new-product-form" onSubmit={handleAddProduct} autoComplete="off">
            <div className="column">
                <div className="input-container">
                    <label htmlFor="nameNewProductForm">Product name</label>
                    <input name="nameNewProductForm" id="nameNewProductForm" onChange={handleOnChange} value={values.nameNewProductForm} required />
                </div>

                <div className="input-container">
                    <label htmlFor="priceNewProductForm">Unit price</label>
                    <input name="priceNewProductForm" id="priceNewProductForm" type="number" min="0.01" step="0.01" onChange={handleOnChange} value={values.priceNewProductForm} required />
                    <span>$USD</span>
                </div>

                <div className="input-container">
                    <label htmlFor="stockNewProductForm">Current stock</label>
                    <input name="stockNewProductForm" id="stockNewProductForm" type="number" min="0" onChange={handleOnChange} value={values.stockNewProductForm} required />
                </div>

            </div>

            <div className="column">
                <div className="input-container">
                    <label htmlFor="descriptionNewProductForm">Description</label>
                    <textarea name="descriptionNewProductForm" id="descriptionNewProductForm" cols={25} rows={5} onChange={handleOnChange} value={values.descriptionNewProductForm} required></textarea>
                </div>

                <div className="buttons">
                    <Dialog.Close>Cancel</Dialog.Close>
                    <button type="submit">Add</button>
                </div>
            </div>
        </form>
    )
}