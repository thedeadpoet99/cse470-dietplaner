import React from 'react';
import logo from './logo.png'; // Import your logo file

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-200 to-purple-200">
            
            <img src={logo} alt="Logo" className="max-w-full h-auto" />
        </div>
    );
};

export default Home;
