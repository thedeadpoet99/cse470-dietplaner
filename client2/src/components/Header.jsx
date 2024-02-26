import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if there is a token in localStorage
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
    }, []);

    const handleLogout = () => {
        // Clear token from localStorage
        localStorage.removeItem('token');
        // Clear user data from localStorage
        localStorage.removeItem('user');
        // Update isLoggedIn state to false
        setIsLoggedIn(false);
        window.location.href = 'http://localhost:3000';

    };

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <span className="font-extrabold text-2xl tracking-tight text-purple-100">DietPlanner</span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/" className="text-gray-200 hover:text-white hover:bg-purple-500 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">Home</a>
                        {isLoggedIn ? (
                            <>
                                <a href="/dashboard" className="text-gray-200 hover:text-white hover:bg-purple-500 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">Dashboard</a>
                                <a href="/userprofile/:username" className="text-gray-200 hover:text-white hover:bg-purple-500 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">Profile</a>
                                <button className="text-gray-200 hover:text-white hover:bg-purple-500 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <a href="/login" className="text-gray-200 hover:text-white hover:bg-purple-500 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">Login</a>
                                <a href="/register" className="text-gray-200 hover:text-white hover:bg-purple-500 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">Register</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
