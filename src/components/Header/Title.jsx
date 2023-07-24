import { useRef, useState } from "react";
import { CiSearch } from 'react-icons/ci';
import { FaBars, FaHeart, FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './title.css';

const Title = () => {
    const navRef = useRef();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { cartTotalQuantity } = useSelector((state) => state.cart);

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
                <Link to='/products/women'>
                    <div className="logo">
                        <span className="rizzy"> RIZZY</span>
                        <span className="text">all the way</span>
                    </div>
                </Link>
                <div className="search">
                    <input type="search" name="search" placeholder="Search" />
                    <CiSearch className="search-icon" />
                </div>
                <div className="userprofile">
                    <Link to='/user' className='user-link'>
                        <FaUserCircle className='user-icons' />
                    </Link>
                    <Link to='/cart' className='user-link'>
                        <div className="cart-section">
                            <FaShoppingCart className='user-icons' />
                            <span className="bag-quantity">
                                <span>{cartTotalQuantity}</span>
                            </span>
                        </div>
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
