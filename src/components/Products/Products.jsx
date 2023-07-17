import Icon from "../../pages/Products/Icons"
const Products = ({product}) => {
  return (
    <>
          <img src={product.imageSrc} alt="product" />
          <div className="product--item--details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>${product.price}</span>
              <Icon id={product.id}/>
          </div>
              </>
  )
}

export default Products