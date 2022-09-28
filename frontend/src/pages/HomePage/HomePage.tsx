import { Catalog } from "../../components/Catalog/Catalog"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import "./HomePage.css"

export const HomePage = () => {
    return (
        <div id="home">
            <Header />

            <main>
                <Catalog />
            </main>

            <Footer />
        </div>
    )
}