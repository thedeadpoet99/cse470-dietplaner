import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
            <div className="mb-4">
                <p><strong>Name:</strong> {userProfile.name}</p>
                <p><strong>Username:</strong> {userProfile.username}</p>
                <p><strong>Date of Birth:</strong> {userProfile.dob}</p>
                <p><strong>Height:</strong> {userProfile.height}</p>
                <p><strong>Weight:</strong> {userProfile.weight}</p>
            </div>
            {/* Style the Change Password link */}
            <Link
                to="/user/passwordchange"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
            >
                Change Password
            </Link>
        </div>
    );
};

export default UserProfile;
