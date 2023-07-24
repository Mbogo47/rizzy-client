import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './icons.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice.js';
import {useNavigate} from 'react-router-dom'

const Icon = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
        console.log(product)
        navigate('/cart')
    }
    const handleAddToWishList = (product) => {
        console.log('added to wish list')
        console.log(product)
    }

    return (
        <div className="pro-icons">
            {/* Add to cart section */}
            <div className="add-to-cart">
                <button className="cart" onClick={() => handleAddToCart(product)}>
                    <FaShoppingCart className="cart-icon" title="Add to cart" />
                </button>
            </div>

            {/* Wishlist section */}
            <div className="wishlist">
                <button className="wish" onClick={() => handleAddToWishList(product)}>
                    <FaHeart className="wish-icon" title="Add to wishlist" />
                </button>
            </div>
        </div>
    );
};

export default Icon;
