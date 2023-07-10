import { CiSearch } from 'react-icons/ci';

const Header = () => {
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
                        <span>Sign In</span>
                    </button>

                    <button className="btn-secondary">
                        <span>Sign Up</span>
                    </button>

                </div>

            </nav>
        </>
    )
}

export default Header