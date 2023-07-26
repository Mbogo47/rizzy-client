import { Link } from 'react-router-dom';
import '../../components/Header/title.css';

const Title = () => {



return (
    <header className='header'>
        <div id='menu-btn' >
            <div className="logo">
                <span className="rizzy"> RIZZY</span>
                <span className="text">all the way</span>
            </div>

        </div>
        <nav >
            <Link to='/products/women'>
                <div className="logo">
                    <span className="rizzy"> RIZZY</span>
                    <span className="text">all the way</span>
                </div>
            </Link>
        </nav>
    </header>
);
};

export default Title;
