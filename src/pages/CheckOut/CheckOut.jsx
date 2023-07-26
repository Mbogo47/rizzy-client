import checkoutpic from '../../assets/checkout.svg';
import { Link } from 'react-router-dom';
const CheckOut = () => {
  return (
    <div>
      <img src={checkoutpic} alt="checkout" />
    <div className="placed">
      Order placed
    </div>
      <div className="continue-shopping">
        <Link to="/products/women">
          <FaArrowLeft className="arrow-icon" />
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default CheckOut