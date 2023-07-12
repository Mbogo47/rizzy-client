import './title.css'
import { CiSearch } from 'react-icons/ci'
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
                      <button className='btn'>Combos</button>
                  </li>
                  <li className='nav-item'>
                      <button className='btn'>Men</button>
                  </li>
                  <li className='nav-item'>
                      <button className='btn'>Women</button>
                  </li>
                  <li className='nav-item'>
                      <button className='btn'>Children</button>
                  </li>
              </ul>

              <div className="search">
                  <input type="search" name="search" placeholder="Search" />
                  <CiSearch className="search-icon" />
              </div>

          </nav>
      </>
  )
}

export default Title