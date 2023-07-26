import { useEffect, useState } from 'react';
import { FaBars, FaPeopleCarry, FaSalesforce, FaShopify } from 'react-icons/fa';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Admin = () => {
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
            {/* <Title /> */}
            <Sidebar collapsed={collapsed} className='sidebar'  transitionDuration={1000} >
                <Menu>
                    <MenuItem icon={<FaBars className="icons-side" />} onClick={() => { setCollapsed(!collapsed); }} >
                        <p>Admin</p>
                    </MenuItem>
                    <SubMenu label="Products"  icon={< FaPeopleCarry className="icons-side" />} className='menu'>
                        <MenuItem icon={< FaShopify className="icons-side" />} component={<Link to="/admin/allproducts" />} className='menu'>
                            <span className="span-side">Products</span>
                        </MenuItem>
                        <MenuItem icon={< FaSalesforce className="icons-side" />} component={<Link to="/admin/createproducts" />} className='menu'>
                            <span className="span-side">Create Products</span>
                        </MenuItem>
                    </SubMenu>
                    <MenuItem icon={< FaPeopleCarry className="icons-side" />} component={<Link to="/admin/allusers" />} className='menu'>
                            <span className="span-side">Users</span>
                    </MenuItem> 
                </Menu>
            </Sidebar>
        </>
    );
};

export default Admin;
