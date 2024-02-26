import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '', // Add email field to formData state
    password: '',
    dob: '',
    height: '',
    weight: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send registration data to the server
      const res = await axios.post('http://localhost:3001/user/register', formData);
      console.log(res.data); // Log the response from the server
      // Optionally, redirect the user or show a success message
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6 mt-5 mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label> {/* Add email field */}
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">Height:</label>
          <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">Weight:</label>
          <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
      </form>
    </div>
  );
};

export default Register;
