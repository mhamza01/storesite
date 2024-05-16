import React from "react";
import dior1 from "../assets/dior1.jpg";
import rings1 from "../assets/rings1.jpg";

const Home = () => {
    return (
        <div className="relative">
            <div className="h-screen">
                <div className="inline-block relative w-1/2 bg-cover bg-no-repeat bg-center h-4/5 transition border-t-4 border-slate-600 hover:border-gray-900 cursor-pointer filter grayscale transform hover:filter-none transition duration-500 " style={{ backgroundImage: `url(${dior1})`, backgroundPosition: 'left', backgroundPositionY: '-320px', verticalAlign: 'top'}}></div>
                <div className="inline-block relative w-1/2 bg-cover bg-no-repeat bg-center h-4/5 transition border-t-4 border-slate-600 hover:border-gray-900 cursor-pointer filter grayscale transform hover:filter-none transition duration-500 " style={{ backgroundImage: `url(${rings1})`, backgroundPosition: 'left', backgroundPositionX: '-110px', verticalAlign: 'top'}}></div>
            <div className="">
                <div className="text-center text-white text-1xl bg-slate-800 -py-4">Hello</div>
            </div>
        </div>
            
      </div>
    );
};

export default Home;