import { Outlet } from "react-router-dom"
import Products from "./Products"
import './products.css'
import Title from "../Header/Title"
import Footer from "../Footer/Footer"
const ProductCont = () => {
    return (
        <>
        <Title/>
            <div className="pro-cont">

                <Products />
                <div className="products-content">

                    <Outlet />
                </div>
            </div>
            <Footer />

        </>
    )
}

export default ProductCont