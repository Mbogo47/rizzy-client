import { FaHeart, FaShoppingCart } from "react-icons/fa";
import './icons.css'

const Icon = () => {

    return (
        <div className="pro-icons">
        <FaShoppingCart className='pro-icon' title="Add to cart" />
            <FaHeart className='pro-icon' title="Add to wishlist" />
           
        </div>
    );
};

export default Icon;
