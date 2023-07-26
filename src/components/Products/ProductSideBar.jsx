import { useEffect, useState } from 'react';
import { FaBabyCarriage, FaBars, FaPeopleCarry } from 'react-icons/fa';
import { IoManSharp, IoWomanSharp } from 'react-icons/io5';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import Title from '../Header/Title';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Products = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

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
      <Sidebar collapsed={collapsed} className="sidebar" transitionDuration={1000} >
        <Menu>
          <MenuItem icon={<FaBars className="icons-side" />} onClick={() => { setCollapsed(!collapsed); }} className='menu'>
            <p>Welcome to Rizzy</p>
          </MenuItem >
          <MenuItem
            icon={<IoWomanSharp className="icons-side" />}
            component={<Link to="women" />}
            onClick={() => setActiveMenuItem('women')} // Set active state when Women's Fashion menu item is clicked
            className={activeMenuItem === 'women' ? 'menu active' : 'menu'}
          >
            <span className="span-side">Women's Fashion</span>
          </MenuItem>
          <MenuItem
            icon={<IoManSharp className="icons-side" />}
            component={<Link to="men" />}
            onClick={() => setActiveMenuItem('men')}
            className={activeMenuItem === 'men' ? 'menu active' : 'menu'}
          >
            <span className="span-side">Men's Fashion</span>
          </MenuItem>
          <MenuItem
            icon={<FaBabyCarriage className="icons-side" />}
            component={<Link to="child" />}
            onClick={() => setActiveMenuItem('child')} // Set active state when Children's Fashion menu item is clicked
            className={activeMenuItem === 'child' ? 'menu active' : 'menu'}
          >
            <span className="span-side">Children's Fashion</span>
          </MenuItem>

        </Menu>
      </Sidebar>
    </>
  );
};

export default Products;
