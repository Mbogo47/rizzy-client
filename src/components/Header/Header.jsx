import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Header = ({}) => {
    return (
        <>
            <nav>

                <div className="logo">
                    <span className="rizzy"> RIZZY</span>
                    <span className="text">all the way</span>
                </div>

                <div className="search">
                    <input type="search" name="search" placeholder="Search" />
                    <CiSearch className="search-icon" />
                </div>

                <div className="auth">

                    <button className="btn-primary">
                        <Link to='/login'>
                        <span>Admin</span>
                        </Link>
                            
                    </button>
                    <button className="btn-primary">
                        <Link to='/login'>
                            <span>Sign In</span>
                        </Link>

                    </button>

                    <button className="btn-primary">
                        <Link to='/signup'>

                        <span>Sign Up</span>
                        </Link>
                    </button>

                </div>

            </nav>
        </>
    )
}

export default Header