import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import product1Image from '../../../assets/product_img1.jpg'; // Update the image path accordingly
import Title from '../../../components/Header/Title';
import '../icons.css';
import './combos.css';

// Sample product data
const productsData = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99,
        imageSrc: product1Image,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 19.99,
        imageSrc: product1Image,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description for Product 3',
        price: 19.99,
        imageSrc: product1Image,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description for Product 4',
        price: 19.99,
        imageSrc: product1Image,
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'Description for Product 5',
        price: 19.99,
        imageSrc: product1Image,
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'Description for Product 6',
        price: 19.99,
        imageSrc: product1Image,
    },
];

const Combos = () => {
    const addToWishlist = (id) => {
        console.log('Added to wishlist');
        console.log(id);
    };

    const addToCart = (id) => {
        console.log('Added to cart');
        console.log(id);
    };
    return (
        <>
            {/* <Title /> */}
            <section className="products">
                <div className="product--items">
                    {productsData.map((product) => (
                        <div key={product.id} className="product--item">
                            <img src={product.imageSrc} alt="product" />
                            <div className="product--item--details">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <span>${product.price}</span>
                                <div className="pro-icons">
                                    {/* Add to cart section */}
                                    <div className="add-to-cart">
                                        <button className="cart" onClick={() => addToCart(product.id)}>
                                            <FaShoppingCart className="cart-icon" title="Add to cart" />
                                            Add to cart
                                        </button>
                                    </div>

                                    {/* Wishlist section */}
                                    <div className="wishlist">
                                        <button onClick={() => addToWishlist(product.id)} className="wish">
                                            <FaHeart className="wish-icon" title="Add to wishlist" />
                                            Add to wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Combos;
