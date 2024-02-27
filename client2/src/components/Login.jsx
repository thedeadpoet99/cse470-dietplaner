import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

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
        setMessage('');
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
            
            // Redirect to user profile page
            setMessage('Login Successful');
            setTimeout(() => {
                setMessage('');
                window.location.href = `/dashboard`;
            }, 1000);
            setIsLoggedIn(true);
            
        } catch (error) {
            console.error('Login error:', error.response.data);
            // Set error state to display error message
            setError(error.response.data.message);
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 to-purple-200">
          <div className="max-w-lg w-full mt-10 p-8 bg-pink-100 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center">{isLoggedIn ? '' : 'Login'}</h2>
            {isLoggedIn ? (
              <h1>
                {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
              </h1>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                  <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-input w-full" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                  <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input w-full" required />
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <button type="submit" className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 w-full">Login</button>
              </form>
            )}
          </div>
        </div>
      );
      
};

export default Login;
