import { useState, useEffect, useRef } from 'react';
import { FaPencilAlt } from 'react-icons/fa'
// import { FiEdit } from 'react-icons/fi'

const User = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
      <div className="App">
          <div className="menu-container" ref={menuRef}>
              <div className="menu-trigger" onClick={() => setOpen(!open)}>
                  <FaPencilAlt />
              </div>

              <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                  <h3>
                      The Kiet<br />
                      <span>Website Designer</span>
                  </h3>
                  <ul>
                      <DropdownItem icon={<FaPencilAlt />} text="My Profile" />
                      <DropdownItem icon={<FaPencilAlt />} text="Edit Profile" />
                      <DropdownItem icon={<FaPencilAlt />} text="Inbox" />
                      <DropdownItem icon={<FaPencilAlt />} text="Settings" />
                      <DropdownItem icon={<FaPencilAlt />} text="Helps" />
                      <DropdownItem icon={<FaPencilAlt />} text="Logout" />
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default User