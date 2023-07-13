import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && userData.user) {
            setUser(userData.user);
        }
    }, []);

    if (!user) {
        return <div>No user data found</div>;
    }

    const { email, username } = user;

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <label>Email</label>
                <input type="text" value={email} disabled />
            </div>
            <div>
                <label>Username</label>
                <input type="text" value={username} disabled />
            </div>
        </div>
    );
};

export default UserProfile;
