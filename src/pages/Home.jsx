import React from "react";
import dior1 from "../assets/dior1.jpg";
import rings1 from "../assets/rings1.jpg";

const Home = () => {
    return (
        <div className="relative">
        <div className="h-screen">
            <div className="inline-block relative w-1/2 bg-cover bg-no-repeat bg-center h-4/5 transition border-t-4 border-gray-600 hover:border-gray-900 cursor-pointer filter grayscale transform hover:filter-none transition duration-500" style={{ backgroundImage: `url(${dior1})`, backgroundPosition: 'left', backgroundPositionY: '-320px', verticalAlign: 'top', textShadow: '#000 0px 3px 20px'}}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-center text-3xl text-white">Fashion</div>
                </div>
            </div>
            <div className="inline-block relative w-1/2 bg-cover bg-no-repeat bg-center h-4/5 transition border-t-4 border-gray-600 hover:border-gray-900 cursor-pointer filter grayscale transform hover:filter-none transition duration-500" style={{ backgroundImage: `url(${rings1})`, backgroundPosition: 'left', backgroundPositionX: '-110px', verticalAlign: 'top', textShadow: '#000 0px 3px 20px' }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-center text-3xl text-white">Accessories</div>
                </div>
            </div>
            <div className="text-center text-gray-900 bg-gray-800 -py-1">.</div>
        </div>
    </div>
    );
};

export default Home;