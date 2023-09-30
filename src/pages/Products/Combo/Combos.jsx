import React from 'react';
// Update the image path accordingly
import Icon from '../Icons';
import './combos.css';


// Sample product data
// const productsData = [
//     {
//         id: 1,
//         name: 'Product 1',
//         description: 'Description for Product 1',
//         price: 19.99,
//         imageSrc: product1Image,
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         description: 'Description for Product 2',
//         price: 19.99,
//         imageSrc: product1Image,
//     },
//     {
//         id: 3,
//         name: 'Product 3',
//         description: 'Description for Product 3',
//         price: 19.99,
//         imageSrc: product1Image,
//     },
//     {
//         id: 4,
//         name: 'Product 4',
//         description: 'Description for Product 4',
//         price: 19.99,
//         imageSrc: product1Image,
//     },
//     {
//         id: 5,
//         name: 'Product 5',
//         description: 'Description for Product 5',
//         price: 19.99,
//         imageSrc: product1Image,
//     },
//     {
//         id: 6,
//         name: 'Product 6',
//         description: 'Description for Product 6',
//         price: 19.99,
//         imageSrc: product1Image,
//     },
// ];

const Combos = () => {

    return (
        <>
            <Title />
            <section className="products">
                <div className="product--items">
                    {productsData.map((product) => (
                        <div key={product.id} className="product--item">
                              <div className="product--image">
                                <img src={product.imageSrc} alt="product" className="img"/>
                            </div>
                            <div className="product--item--details">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <span>${product.price}</span>
                                <Icon />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Combos;
