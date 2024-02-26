import React from 'react';

const Home = () => {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-200 to-purple-200">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Eat Smart, Live Well: Your Personalized Path to Health!</h1>
            <div className="flex flex-col items-center">
                {!isLoggedIn && (
                    <>
                        <a href="/register" className="text-lg bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">Create an account</a>
                        <a href="/login" className="text-lg bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">Login</a>
                    </>
                )}
                {isLoggedIn && (
                    <a href="/userprofile/:username" className="text-lg bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">Get started</a>
                )}
            </div>
        </div>
    );
};

export default Home;
