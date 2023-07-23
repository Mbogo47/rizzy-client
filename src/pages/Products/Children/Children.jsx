import { useEffect, useState } from 'react';
import { apiDomain } from '../../../utils/utilsDomain';
import getProductImage from '../../../components/images/images.js';
import '../Combo/combos.css';
import Icon from '../Icons'

// Combos
const Children = () => {
const [childrenProducts, setChildrenProducts] = useState([]);
useEffect(() => {
    fetch(`${apiDomain}/products/Children`)
        .then((response) => response.json())
        .then((data) => {
            setChildrenProducts(data);
        })
        .catch((error) => {
            console.error('Error fetching Children products:', error);
        });
}, []);


    return (
        <>

            <section className="Children">
                <div className="product--items">
                    {childrenProducts.map((product) => (
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
    )
}

export default Children