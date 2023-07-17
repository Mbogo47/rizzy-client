import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './icons.css';

const Icon = ({ id }) => { // Destructure the id prop here
    // Define a function to be called when the heart icon is clicked.
    const addToWishList = () => {
        console.log('Added to wishlist');
        console.log(id);
        // alert('Added to wishlist');
    };

    // Return the JSX representing the icons.
    return (
        <div className="pro-icons">
            {/* Shopping cart section */}
            <div className="add-to-cart">
                <button className="add-to-cart-button">+</button>
                <FaShoppingCart className="cart-icon" title="Add to cart" />
                <button className="remove-from-cart-button">-</button>
            </div>

            {/* Wishlist section */}
            <div className="wishlist">
                {/* Uncomment the following line if you want to display "Add to wishlist" text */}
                {/* <span className="add-to-wishlist">Add to wishlist</span> */}

                {/* The heart icon with an onClick event to call addToWishList function */}
                <button onClick={(e) => addToWishList()}>
                    {/* <FaHeart className="wish-icon" title="Add to wishlist" /> */}
                    add to wishlist
                </button>

            </div>
        </div>
    );
};

export default Icon;
