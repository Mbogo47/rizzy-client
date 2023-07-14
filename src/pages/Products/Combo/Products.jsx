import product1 from '../../../assets/product_img1.jpg'
import Navbar from '../../../components/Header/x'
import Icon from '../Icons'
import './products.css'


// Combos
const Products = () => {

    return (
        <>
            <Navbar />
            <section className="products">
                <div className="product--items">
                    <div className="product--item">

                        <img src={product1} alt="product" />
                        <div className="product--item--details">
                            <h3>Product Name</h3>
                            <p>Product Description</p>
                            <span>Price</span>
                            <Icon />
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