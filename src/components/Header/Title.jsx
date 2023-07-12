import { Link } from 'react-router-dom'
import './title.css'
import { CiSearch } from 'react-icons/ci'
import { FaUserCircle, FaShoppingCart} from 'react-icons/fa'

const Title = () => {

  return (
      <>
          <nav className='navbar'>

              <div className="logo">
                  <span className="rizzy"> RIZZY</span>
                  <span className="text">all the way</span>
              </div>

              <ul className='nav-list'>
                  <li className='nav-item'>
                      <Link to="/combos" className="btn">Combos</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to="/men" className="btn">Men</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to="/women" className="btn">Women</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to="/child" className="btn">Children</Link>
                  </li>
              </ul>


              <div className="search">
                  <input type="search" name="search" placeholder="Search" />
                  <CiSearch className="search-icon" />
              </div>

              <div className="userprofile">
                  <FaUserCircle style={{'marginRight':'20px'}}/>
                  <FaShoppingCart />
              </div>

              <div className="cart">
                  
              </div>

          </nav>
      </>
  )
}

export default Title