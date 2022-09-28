import { ProductCard } from "./ProductCard"

export const ProductsList = () => {
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
                <ProductCard />
            </tbody>
        </table>
    )
}