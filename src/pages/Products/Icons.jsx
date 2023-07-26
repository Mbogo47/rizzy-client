import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { addToCart } from '../../redux/cartSlice.js';
import { addToWish } from '../../redux/wishSlice.js';
import './icons.css';

const Icon = ({ product }) => {
    const dispatch = useDispatch();

    // Use useSelector to access the wishItems from the Redux state
    const wishItems = useSelector((state) => state.wish.wishItems);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        console.log(product);
    };

    const handleAddToWishList = () => {
        dispatch(addToWish(product));
        console.log(product);
    };

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
