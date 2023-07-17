import Title from '../../../components/Header/Title'
import product1 from '../../../assets/product_img11.jpg'
import '../Combo/products.css'
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
    // Add more products here...
];
// Combos
const Women = () => {

    return (
        <>
            <Title />
            <section className="Women">
                <div className="product--items">
                    {productsData.map((product) => (
                        <div key={product.id} className="product--item">
                            <img src={product.imageSrc} alt="product" />
                            <div className="product--item--details">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <span>${product.price}</span>
                                <Icon id={product.id} />
                                {/* <button onClick={handleAddToWishlist}>
                                    {isInWishlist ? '❤️ Added to Wishlist' : '🤍 Add to Wishlist'}
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
                
            </section>
        </>
    )
}

export default Women