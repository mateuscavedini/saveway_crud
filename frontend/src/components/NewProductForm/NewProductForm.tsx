import * as Dialog from "@radix-ui/react-dialog"
import { ChangeEvent, FormEvent, useState } from "react"
import "./NewProductForm.css"

export const NewProductForm = () => {
    const [values, setValues] = useState({
        name: "",
        price: 0.01,
        stock: 0,
        description: ""
    })
    
    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const targetName = e.currentTarget.name
        const newValue = e.currentTarget.value
        
        setValues({
            ...values,
            [targetName]: newValue
        })
    }
    
    const handleAddProduct = (e: FormEvent): void => {
        e.preventDefault()
    }
    
    return (
        <form id="add-new-product-form" onSubmit={handleAddProduct} autoComplete="off">
            <div className="column">
                <div className="input-container">
                    <label htmlFor="name">Product name</label>
                    <input name="name" id="name" onChange={handleOnChange} value={values.name} required/>
                </div>

                <div className="input-container">
                    <label htmlFor="price">Unit price</label>
                    <input name="price" id="price" type="number" min="0.01" step="0.01" onChange={handleOnChange} value={values.price} required/>
                    <span>$USD</span>
                </div>

                <div className="input-container">
                    <label htmlFor="stock">Current stock</label>
                    <input name="stock" id="stock" type="number" min="0" onChange={handleOnChange} value={values.stock} required/>
                </div>

            </div>

            <div className="column">
                <div className="input-container">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols={25} rows={5} onChange={handleOnChange} value={values.description} required></textarea>
                </div>

                <div className="buttons">
                    <Dialog.Close>Cancel</Dialog.Close>
                    <button type="submit">Add</button>
                </div>
            </div>
        </form>
    )
}