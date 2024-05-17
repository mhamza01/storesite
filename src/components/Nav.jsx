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
                                
                                <div className="group">
                                    <button className="hover:text-gray-700 transition border-b-2 border-gray-100 hover:border-gray-950 cursor-pointer">SHOP</button>
                                    <div className="border-b-4 border-gray-800 hidden group-hover:flex flex-col absolute left-0 p-10 w-full px-20 bg-gray-100 z-20 text-black duration-500">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                                           <div className="flex flex-col">
                                            <h3 className="mb-4 font-bold text-1xl text-black">Products</h3>
                                                <a href="" className="hover:underline hover:text-gray-900">Hoodies</a>
                                                <a href="" className="hover:underline hover:text-gray-900">Outerwear</a>
                                                <a href="" className="hover:underline hover:text-gray-900">Bottoms</a>
                                                <a href="" className="hover:underline hover:text-gray-900">Shoes</a>
                                           </div>
                                           <div className="flex flex-col">
                                            <h3 className="mb-4 font-bold text-1xl text-black">Accessories</h3>
                                                <a href="" className="hover:underline hover:text-gray-900">Rings</a>
                                                <a href="" className="hover:underline hover:text-gray-900">Wallets</a>
                                                <a href="" className="hover:underline hover:text-gray-900">Glasses</a>
                                                <a href="" className="hover:underline hover:text-gray-900">Hats</a>
                                           </div>

                                        </div>
                                    </div>
                                </div>


                                <Link to="/gallery"><li className="hover:text-gray-700 transition border-b-2 border-gray-100 hover:border-gray-950 cursor-pointer">GALLERY</li></Link>
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
