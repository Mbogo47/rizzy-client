import Title from '../../../components/Header/Title'
import product1 from '../../../assets/product_img4.jpg'
import '../Combo/products.css'
// Combos
const Children = () => {
    return (
        <>
            <Title />
            <section className="Children">
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

export default Children