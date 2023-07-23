import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChildrenProducts } from '../../../redux/apiCall.js'; 
import getProductImage from '../../../components/images/images.js';
import '../Combo/combos.css';
import Icon from '../Icons';

const Children = () => {
    const childrenProducts = useSelector((state) => state.product.items);
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchChildrenData = async () => {
            try {
                const data = await getChildrenProducts(dispatch);
                console.log(data); 
            } catch (err) {
                console.log(err);
            }
        };

        fetchChildrenData();
    }, [dispatch]);

    return (
        <>
            <section className="Children">
                <div className="product--items">
                    {childrenProducts?.map((product) => (
                        <div key={product.productId} className="product--item">
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

export default Children;
