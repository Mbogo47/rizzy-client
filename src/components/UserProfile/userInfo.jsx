import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiCall.js'; // Make sure to import the loginUser action
import { apiDomain } from '../../utils/utilsDomain.jsx';

const Profile = () => {
    const user = useSelector((state) => state.user.user);
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch user details on component mount
        // Dispatch the loginUser action to fetch the user details from the server
        dispatch(loginUser(user)); // You might need to pass the appropriate parameters here
    }, [dispatch, user]);

    const handlePasswordChange = async () => {
        try {
            // Make the API call to change the password
            const response = await fetch(`${apiDomain}/changePassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    newPassword,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message); // Password changed successfully
                setNewPassword('');
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error('Error occurred while changing password:', error);
        }
    };

    return (
        <div className="profile-container">
            <div className="user-details">
                <h2>User Details</h2>
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                {/* Display other user details as needed */}
            </div>
            <div className="change-password">
                <h2>Change Password</h2>
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button onClick={handlePasswordChange}>Change Password</button>
            </div>
        </div>
    );
};

export default Profile;
