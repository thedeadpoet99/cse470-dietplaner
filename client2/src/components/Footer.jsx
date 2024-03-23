import React from 'react';

const Footer = () => {
    return (
        <footer className="bottom-0 left-0 w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} DietPlanner. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
