import React from 'react';
import Icon from '../Icons';
import './products.css';
import Title from '../../../components/Header/Title';
import product1Image from '../../../assets/product_img1.jpg'; // Update the image path accordingly

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
    // Add more products here...
];

const Products = () => {
    return (
        <>
            <Title />
            <section className="products">
                <div className="product--items">
                    {productsData.map((product) => (
                        <div key={product.id} className="product--item">
                            <img src={product.imageSrc} alt="product" />
                            <div className="product--item--details">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <span>${product.price}</span>
                                <Icon id={product.id} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Products;
