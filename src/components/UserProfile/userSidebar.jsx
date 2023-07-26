import { Outlet } from "react-router-dom"
import Title from "../Header/Title"
import '../Products/products.css'
import User from "./User"

const UserContent = () => {
    return (
        <>
            <Title />
            <div className="pro-cont">

                <User />
                <div className="products-content">

                    <Outlet />
                </div>
            </div>


        </>
    )
}

export default UserContent