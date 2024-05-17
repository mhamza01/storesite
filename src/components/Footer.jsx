import React from "react";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="bg-gray-100 border-t-2 border-gray-950 text-black py-4" >
        <div className="container mx-auto flex justify-between items-center">
            <div className="-px">
                <h2 className="text-lg font-bold">HAZZA</h2>
                <p className="text-sm">SUBSCRIBE TO OUR NEWSLETTER</p>
            </div>
            <div>
                <nav>
                    <ul className="flex space-x-8">
                        <li><Link to="/subscribe" className="hover:text-gray-500">SUBSCRIBE</Link></li>
                        <li><Link to="/about" className="hover:text-gray-500">ABOUT</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-500">CONTACT</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
