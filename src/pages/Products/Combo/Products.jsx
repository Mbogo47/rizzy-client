import React from 'react'
import Title from '../../../components/Header/Title'
import product1 from '../../../assets/product_img1.jpg'

// Combos
const Products = () => {
    return (
        <>
            <Title />
            <section className="products">
                <div className="product--items">
                    <div className="product--item">
                        <img src={product1} alt="product" />
                        <div className="product--item--details">
                            <h3>Product Name</h3>
                            <p>Product Description</p>
                            <span>Price</span>
                        </div>
                    </div>
                    <div className="product--item">
                        <img src={product1} alt="product" />
                        <div className="product--item--details">
                            <h3>Product Name</h3>
                            <p>Product Description</p>
                            <span>Price</span>
                        </div>
                    </div>
                    <div className="product--item">
                        <img src={product1} alt="product" />
                        <div className="product--item--details">
                            <h3>Product Name</h3>
                            <p>Product Description</p>
                            <span>Price</span>
                        </div>
                    </div>
                    <div className="product--item">
                        <img src={product1} alt="product" />
                        <div className="product--item--details">
                            <h3>Product Name</h3>
                            <p>Product Description</p>
                            <span>Price</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products