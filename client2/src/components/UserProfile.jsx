import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Retrieve user data from localStorage
        const userData = localStorage.getItem('user');
        if (userData) {
            const user = JSON.parse(userData);
            setUserProfile(user);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userProfile) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <p><strong>Name:</strong> {userProfile.name}</p>
                <p><strong>Username:</strong> {userProfile.username}</p>
                <p><strong>Date of Birth:</strong> {userProfile.dob}</p>
                <p><strong>Height:</strong> {userProfile.height}</p>
                <p><strong>Weight:</strong> {userProfile.weight}</p>
            </div>
        </div>
    );
};

export default UserProfile;
