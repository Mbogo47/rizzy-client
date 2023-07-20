import Title from '../../../components/Header/Title'
import product1 from '../../../assets/product_img4.jpg'
import '../Combo/products.css'
import Icon from '../Icons';
import Products from '../../../components/Products/Products';
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
    {
        id: 4,
        name: 'Product 4',
        description: 'Description for Product 4',
        price: 19.99,
        imageSrc: product1,
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'Description for Product 5',
        price: 19.99,
        imageSrc: product1,
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'Description for Product 6',
        price: 19.99,
        imageSrc: product1,
    },
];

// Combos
const Children = () => {
    
    return (
        <>
            {/* <Title /> */}
            <section className="Children">
                <div className="product--items">
                    {productsData.map((product) => (
                        <div key={product.id} className="product--item">
                            <img src={product.imageSrc} alt="product" />
                            <div className="product--item--details">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <span>${product.price}</span>
                                <Icon id={product.id} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Children