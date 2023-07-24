import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Header/Title';
import getProductImage from '../../components/images/images.js';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../redux/cartSlice.js';
import './cart.css';
import { useEffect } from 'react';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <>
            <Title />
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                {cart.cartItems.length === 0 ?
                    <div className="cart-empty">
                        <p>Cart is empty</p>
                        <div className="start-shopping">
                            <Link to="/products/women">
                                <FaArrowLeft className="arrow-icon" />
                                <button>Start Shopping</button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="titles">
                            <h3 className="product-title">Product</h3>
                            <h3 className="price">Price</h3>
                            <h3 className="quantity">Quantity</h3>
                            <h3 className="total">Total</h3>
                        </div>
                        <div className="cart-items">
                            {cart.cartItems?.map(cartItem => (
                                <div className="cart-item" key={cartItem.productId}>
                                    <div className="cart-product">
                                        <img src={getProductImage(cartItem.productName)} alt={cartItem.productName} />
                                        <div>
                                            <h3>{cartItem.productName}</h3>
                                            <p>{cartItem.productDescription}</p>
                                            <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="cart-product-price">{cartItem.productPrice}</div>
                                    <div className="cart-product-quantity">
                                        <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                        <div className="count">{cartItem.cartQuantity}</div>
                                        <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                    </div>
                                    <div className="cart-product-total-price">${cartItem.productPrice * cartItem.cartQuantity}</div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-item-summary">
                            <button className="clear-cart" onClick={() => handleClearCart()}>Clear Cart</button>
                            <div className="cart-checkout">
                                <div className="subtotal">
                                    <span>Subtotal</span>
                                    <span className="amount">${cart.cartTotalAmount}</span>
                                    <p>Free shipping</p>
                                    <button>Check Out</button>
                                    <div className="continue-shopping">
                                        <Link to="/products/women">
                                            <FaArrowLeft className="arrow-icon" />
                                            <button>Continue Shopping</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </>
    );
}

export default Cart;
