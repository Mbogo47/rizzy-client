import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './icons.css';

const Icon = ({ id }) => {
    const addToWishlist = (id) => {
        console.log('Added to wishlist');
        console.log(id);
    };

    const addToCart = (id) => {
        console.log('Added to cart');
        console.log(id);
    };


    return (
        <div className="pro-icons">
            {/* Add to cart section */}
            <div className="add-to-cart">
                <button className="cart" button onClick={(e) => addToCart()} >
                <FaShoppingCart className="cart-icon" title="Add to cart" />
                    
                </button>
            </div>

            {/* Wishlist section */}
            <div className="wishlist">
                <button onClick={(e) => addToWishlist()} className="wish">
                    <FaHeart className="wish-icon" title="Add to wishlist" />
                    
                    
                </button>
            </div>
        </div>
    );
};

export default Icon;
