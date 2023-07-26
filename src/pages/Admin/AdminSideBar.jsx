import { Outlet } from "react-router-dom"
import '../../components/Products/products.css'
import Admin from "./Admin"
import Title from "./AdminTitle"

const AdminCont = () => {
    return (
        <>
            <Title />
            <div className="pro-cont">

                <Admin />
                <div className="products-content" style={{ marginLeft: '10px' }}>

                    <Outlet />
                </div>
            </div>


        </>
    )
}

export default AdminCont