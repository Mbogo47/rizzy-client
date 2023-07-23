import  { useEffect, useState } from 'react';
import { apiDomain } from '../../../utils/utilsDomain';
import getProductImage from '../../../components/images/images.js';
import '../Combo/combos.css';
import Icon from '../Icons';

const Men = () => {
    const [menProducts, setMenProducts] = useState([]);

    useEffect(() => {
        fetch(`${apiDomain}/products/Men`)
            .then((response) => response.json())
            .then((data) => {
 
                setMenProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching Men products:', error);
            });
    }, []);

    return (
        <>
        <section className="Men">
            <div className="product--items">
                {menProducts.map((product) => (
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

export default Men;

