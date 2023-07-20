import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './icons.css';

const Icon = ({ id }) => {
    const addToWishlist = () => {
        console.log('Added to wishlist');
        console.log(id);
        // Perform any other logic you need to add the product to the wishlist
        // For example, you can make an API request to your backend here.
    };

    return (
        <div className="pro-icons">
            {/* Add to cart section */}
            <div className="add-to-cart">
                <button className="cart">
                <FaShoppingCart className="cart-icon" title="Add to cart" />
                    Add to cart
                </button>
            </div>

            {/* Wishlist section */}
            <div className="wishlist">
                <button onClick={(e) => addToWishlist()} className="wish">
                    <FaHeart className="wish-icon" title="Add to wishlist" />
                    Add to wishlist
                </button>
            </div>
        </div>
    );
};

export default Icon;
