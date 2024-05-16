import React from "react";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav>
            <div className="flex justify-between text-black lg:py-5 px-20 bg-gray-100">
                <div className="">
                    <span className="text-3xl font-bold">HAZZA</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px] text-1xl">
                                <Link to="/shop"><li className="hover:text-gray-700 transition border-b-2 border-gray-100 hover:border-gray-950 cursor-pointer">SHOP</li></Link>
                                <Link to="/about"><li className="hover:text-gray-700 transition border-b-2 border-gray-100 hover:border-gray-950 cursor-pointer">ABOUT</li></Link>
                                <Link to="/contact"><li className="hover:text-gray-700 transition border-b-2 border-gray-100 hover:border-gray-950 cursor-pointer">CONTACT</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
