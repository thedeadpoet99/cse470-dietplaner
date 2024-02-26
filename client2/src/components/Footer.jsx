import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} DietPlanner. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
