import React, { useState, useEffect } from 'react';
import mainlogo from './thelogolightgrey.png'
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState('');


    useEffect(() => {
        // Check if there is a token in localStorage
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists

        setCurrentPage(window.location.pathname);
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
        
        <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-500 to-gray-500 p-4 shadow-lg z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                    <img src={mainlogo} alt="MainLogo" className="h-10 mr-2" /> {/* Add your logo here */}
                        <span className="font-bold text-3xl tracking-tight text-gray-200">DietPlanner</span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/" className={`text-gray-200 hover:text-white ${currentPage === '/' ? 'bg-gray-700' : 'hover:bg-gray-600'} px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300`}>Home</a>
                        {isLoggedIn ? (
                            <>
                                <a href="/post" className={`text-gray-200 hover:text-white ${currentPage === '/post' ? 'bg-gray-700' : 'hover:bg-purple-600'} px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300`}>Community</a>
                                <a href="/dashboard" className={`text-gray-200 hover:text-white ${currentPage === '/dashboard' ? 'bg-gray-700' : 'hover:bg-gray-600'} px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300`}>Dashboard</a>
                                <a href="/userprofile/:username" className={`text-gray-200 hover:text-white ${currentPage === '/userprofile/:username' ? 'bg-gray-700' : 'hover:bg-gray-600'} px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300`}>Profile</a>
                                <button className={`text-gray-200 hover:text-white ${currentPage === '/logout' ? 'bg-gray-700' : 'hover:bg-gray-600'} px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300`} onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <a href="/login" className={`text-gray-200 hover:text-white ${currentPage === '/login' ? 'bg-gray-700' : 'hover:bg-gray-600'} px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300`}>Login</a>
                                <a href="/register" className={`text-gray-200 hover:text-white ${currentPage === '/register' ? 'bg-gray-700' : 'hover:bg-gray-600'} px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300`}>Register</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
