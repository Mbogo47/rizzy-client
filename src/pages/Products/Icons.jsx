import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './icons.css';

const Icon = () => {
    return (
        <div className="pro-icons">
            <div className="add-to-cart">
                <button className="add-to-cart-button">+</button>
                <FaShoppingCart className="cart-icon" title="Add to cart" />
                <button className="remove-from-cart-button">-</button>
            </div>
            <div className="wishlist">
                {/* <span className="add-to-wishlist">Add to wishlist</span> */}
                <FaHeart className="wish-icon" title="Add to wishlist" />
            </div>
        </div>
    );
};

export default Icon;
