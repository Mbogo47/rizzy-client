import { useEffect, useState } from 'react';
import { FaBars, FaHeart, FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import Title from '../Header/Title';
import './user.css';

const User = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleWindowResize = () => {
        setCollapsed(window.innerWidth <= 768); // Change the breakpoint value as per your requirement
    };

    useEffect(() => {
        // Check the window size on initial render
        handleWindowResize();

        // event listener for window resize
        window.addEventListener('resize', handleWindowResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            <Title />
            <Sidebar collapsed={collapsed} className="sidebar" transitionDuration={1000}>
                <Menu>
                    <MenuItem icon={<FaBars className="icons-side" />} onClick={() => { setCollapsed(!collapsed); }}>
                        <p>Welcome to your account</p>
                    </MenuItem >
                    <MenuItem icon={<FaShoppingBag className="icons-side" />}>
                        <span className="span-side">My orders</span>
                    </MenuItem>
                    <MenuItem icon={<FaHeart className="icons-side" />}>
                        <span className="span-side">Wishlist</span>
                    </MenuItem>
                    <MenuItem icon={<FaUserCircle className="icons-side" />}>
                        <span className="span-side">Your Info</span>
                    </MenuItem>
                    <MenuItem icon={<FiLogOut className="icons-side" />}>
                        <span className="span-side">Logout</span>
                    </MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
};

export default User;
