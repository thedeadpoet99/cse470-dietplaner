import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if there is a token in localStorage
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogout = () => {
        // Remove token from localStorage
        localStorage.removeItem('token');
        // Set isLoggedIn to false
        setIsLoggedIn(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/user/login', formData);
            console.log('Login successful:', response.data);
    
            // Extract token and user data from the response
            const { token, user } = response.data;
    
            // Store token in localStorage
            localStorage.setItem('token', token);
    
            // Store user information (except password) in localStorage
            localStorage.setItem('user', JSON.stringify(user));
    
            // Set isLoggedIn to true
            setIsLoggedIn(true);
    
            // Redirect to user profile page
            window.location.href = `/dashboard`;
        } catch (error) {
            console.error('Login error:', error.response.data);
            // Set error state to display error message
            setError(error.response.data.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">{isLoggedIn ? '' : 'Login'}</h2>
            {isLoggedIn ? (
                <h1>
                    You are already logged in.
                </h1>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
                </form>
            )}
        </div>
    );
};

export default Login;
