import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';
import './user.css'
const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Get the navigate function

    const handleLogOut = () => {
        dispatch(logOut());
        navigate('/'); // Go to the home page when log out is clicked
    };

    const handleCancel = () => {
        navigate(-1); // Go back to the previous page when cancel is clicked
    };

    return (
        <div className="logout-container">
            <form>
                <p>Are you sure you want to log out?</p>
                <div className="buttons">
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
            </form>
        </div>
    );
};

export default Logout;
