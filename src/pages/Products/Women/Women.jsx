import { useEffect, useState } from 'react';
import getProductImage from '../../../components/images/images.js';
import { apiDomain } from '../../../utils/utilsDomain';
import '../Combo/combos.css';
import Icon from '../Icons.jsx';

const Women = () => {
    const [womenProducts, setWomenProducts] = useState([]);

    useEffect(() => {
        fetch(`${apiDomain}/products/Women`)
            .then((response) => response.json())
            .then((data) => {
                setWomenProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching Womens products:', error);
            });
    }, []);

    return (
        <>
            <section className="Women">
                <div className="product--items">
                    {womenProducts.map((product) => (
                        <div key={product.id} className="product--item">
                            <div className="image">
                                <img src={getProductImage(product.productName)} alt="product" />
                            </div>
                            <div className="product--item--details">
                                <h3>{product.productName}</h3>
                                <p>{product.productDescription}</p>
                                <span>${product.productPrice}</span>
                            </div>
                            <Icon />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Women;
