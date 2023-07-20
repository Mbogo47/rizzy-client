import { useRef, useState } from "react";
import { CiSearch } from 'react-icons/ci';
import { FaBars, FaHeart, FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './title.css';

const Title = () => {
    const navRef = useRef();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header className='header'>
            <div id='menu-btn' onClick={toggleMenu}>
                <div className="logo">
                    <span className="rizzy"> RIZZY</span>
                    <span className="text">all the way</span>
                </div>
                {isMenuOpen ? (
                    <>
                        <ul className='nav-list'>
                            <FaTimes className='times' />
                            {/* <li className='nav-item'>
                                <Link to="/combos" onClick={toggleMenu}>Combos</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/men" onClick={toggleMenu}>Men</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/women" onClick={toggleMenu}>Women</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/child" onClick={toggleMenu}>Children</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/cart" onClick={toggleMenu}>Cart</Link>
                            </li>
                            <li className='nav-item'>
                                Wish
                            </li> */}
                            <li className='nav-item'>
                                <Link to='/products/combos'>
                                    Products
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/user" onClick={toggleMenu}>User</Link>
                            </li>
                        </ul>
                    </>
                ) : (
                    <FaBars className='bars' onClick={toggleMenu} />
                )}
            </div>
            <nav ref={navRef} className={isMenuOpen ? 'navbar active' : 'navbar'}>
                <div className="logo">
                    <span className="rizzy"> RIZZY</span>
                    <span className="text">all the way</span>
                </div>
                <ul className='nav-list'>
                    {/* <li className='nav-item'>
                        <Link to="/combos" className="btn" onClick={toggleMenu}>Combos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/men" className="btn" onClick={toggleMenu}>Men</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/women" className="btn" onClick={toggleMenu}>Women</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/child" className="btn" onClick={toggleMenu}>Children</Link>
                    </li> */}
                </ul>
                <div className="search">
                    <input type="search" name="search" placeholder="Search" />
                    <CiSearch className="search-icon" />
                </div>
                <div className="userprofile">
                    <Link to='/user' className='user-link'>
                        <FaUserCircle className='user-icons' />
                    </Link>
                    <Link to='/cart' className='user-link'>
                        <FaShoppingCart className='user-icons' />
                    </Link>
                    <Link to='/wishlist' className='user-link'>
                    <FaHeart className='user-icons' />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Title;
