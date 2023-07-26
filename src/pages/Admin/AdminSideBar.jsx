import { Outlet } from "react-router-dom"
import Title from "../../components/Header/Title"
import Admin from "./Admin"
import '../../components/Products/products.css'

const AdminCont = () => {
    return (
        <>
            <Title />
            <div className="pro-cont">

                <Admin />
                <div className="products-content" style={{marginLeft: '10px'}}>

                    <Outlet />
                </div>
            </div>
            {/* <Footer /> */}

        </>
    )
}

export default AdminCont