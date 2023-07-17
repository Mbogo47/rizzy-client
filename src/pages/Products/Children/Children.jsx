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
    // Add more products here...
];

// Combos
const Children = () => {
    
    return (
        <>
            <Title />
            <section className="Children">
                <div className="product--items">
                    {productsData.map((product) => (
                        <div key={product.id} className="product--item">
                            <Products product={product} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Children