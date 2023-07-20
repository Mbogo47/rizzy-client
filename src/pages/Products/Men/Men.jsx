import React from 'react';
import product1 from '../../../assets/product_img2.jpg';
import Title from '../../../components/Header/Title';
import '../Combo/products.css';
import Icon from '../Icons';

// Sample product data
const productsData = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99,
        imageSrc: product1,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 19.99,
        imageSrc: product1,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description for Product 3',
        price: 19.99,
        imageSrc: product1,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description for Product 4',
        price: 19.99,
        imageSrc: product1,
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'Description for Product 5',
        price: 19.99,
        imageSrc: product1,
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'Description for Product 6',
        price: 19.99,
        imageSrc: product1,
    },
];

const Men = () => {
    return (
        <>
            {/* <Title /> */}
            <section className="Men">
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

export default Men;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MenProducts = () => {
//     const [menProducts, setMenProducts] = useState([]);

//     useEffect(() => {
//         // Make an API request to your backend to fetch products with category "Men"
//         axios.get('/api/products?category=Men')
//             .then((response) => {
//                 // Update the state with the fetched products
//                 setMenProducts(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching Men products:', error);
//             });
//     }, []);

//     return (
//         <>
//             <h2>Men's Products</h2>
//             <div>
//                 {menProducts.map((product) => (
//                     <div key={product.id}>
//                         <h3>{product.name}</h3>
//                         <p>{product.description}</p>
//                         <span>Price: ${product.price}</span>
//                         <img src={product.imageSrc} alt="product" />
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default MenProducts;
