import React from 'react';
import Slideshow from './SlideShow';
const Home = () => {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-beige-100 to-beige-300">
            <div className="flex flex-col items-start justify-center px-20 w-1/2">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Eat Smart, Live Well</h1>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Personalized Path to Health!</h1>
                <div className="flex flex-col items-start">
                    {!isLoggedIn && (
                        <>
                            <a href="/register" className="text-lg bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">Create an account</a>
                            <a href="/login" className="text-lg bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">Login</a>
                        </>
                    )}
                    {isLoggedIn && (
                        <a href="/userprofile/:username" className="text-lg bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">Get started</a>
                    )}
                </div>
            </div>
            <div className="w-1/2">
                        <Slideshow/>
            </div>
        </div>
    );
};

export default Home;
