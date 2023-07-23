import { useEffect, useState } from 'react';
import getProductImage from '../../../components/images/images.js';
import { useSelector, useDispatch } from 'react-redux';
import { getWomenProducts } from '../../../redux/apiCall.js';
import '../Combo/combos.css';
import Icon from '../Icons.jsx';

const Women = () => {
   const womenProducts = useSelector((state) => state.product.items);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchWomenData = async () => {
            try {
                const data = await getWomenProducts(dispatch);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchWomenData();
    }, [dispatch]);

    

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
                            <Icon product={product} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Women;
