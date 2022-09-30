import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { ProductCard } from "./ProductCard"

export const ProductsList = () => {
    const { products } = useContext(ProductsContext)

    return (
        <table id="products-list">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">NAME</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">QUANTITY (UN)</th>
                    <th scope="col"></th>
                </tr>
            </thead>

            <tbody>
                {!products.length && <td>There is no product to show.</td>}
                
                {products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </tbody>
        </table>
    )
}