import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenProducts } from '../../../redux/apiCall.js';
import '../Combo/combos.css';
import Icon from '../Icons';

const Men = () => {
    const menProducts = useSelector((state) => state.product.items);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMenData = async () => {
            try {
                const data = await getMenProducts(dispatch);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMenData();
    }, []);

    return (
        <>
            <section className="Men">
                <div className="product--items">
                    {menProducts.map((product) => (
                        <div key={product.productId} className="product--item">
                            <div className="product--image">
                                <img src={product.imageSrc} alt="product" className="img"/>
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

export default Men;
