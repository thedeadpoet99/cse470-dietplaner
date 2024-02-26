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
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">DietPlanner</span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        {isLoggedIn ? (
                            <>
                                <a href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
                                <a href="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
