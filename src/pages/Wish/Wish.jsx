import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Header/Title';
import { removeFromWish, clearWish } from '../../redux/wishSlice.js';
import './wish.css';
import '../Cart/cart.css'

const Wishlist = () => {
    const wish = useSelector((state) => state.wish);


    const dispatch = useDispatch();

    const handleRemoveFromWish = (product) => {
        dispatch(removeFromWish(product));
    };

    const handleClearWish = () => {
        dispatch(clearWish());
    };



    return (
        <>
            <Title />
            <div className="wishlist-container">
                <h2>Wishlist</h2>
                {wish.wishItems.length === 0 ? (
                    <div className="wishlist-empty">
                        <p>Your wishlist is empty</p>
                        <div className="start-shopping">
                            <Link to="/products/women">
                                <FaArrowLeft className="arrow-icon" />
                                <button>Start Shopping</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="titles">
                            {/* <h3 className="product-title">Product</h3> */}
                            {/* <h3 className="price">Price</h3> */}
                            {/* <h3 className="total">Total</h3> */}
                        </div>
                        <div className="wishlist-items">
                            {wish.wishItems.map((wishItem) => (
                                <div className="wishlist-item" key={wishItem.productId}>
                                    <div className="wishlist-product">
                                        <img src={wishItem.productImage} alt={wishItem.productName} />
                                        <div>
                                            <h3>{wishItem.productName}</h3>
                                            <p>{wishItem.productDescription}</p>
                                            <button onClick={() => handleRemoveFromWish(wishItem)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="wishlist-product-price">${wishItem.productPrice}</div>
                                    {/* <div className="wishlist-product-total-price">${wishItem.productPrice}</div> */}
                                </div>
                            ))}
                        </div>
                        <div className="wishlist-item-summary">
                                <button className="clear-cart" onClick={() => handleClearWish()}>Clear Wish</button>
                            <div className="continue-shopping">
                                <Link to="/products/women">

                                    <FaArrowLeft className="arrow-icon" />
                                    <button>Continue Shopping</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Wishlist;
