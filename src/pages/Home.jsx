import React from "react";
import dior1 from "../assets/dior1.jpg";
import rings1 from "../assets/rings1.jpg";
import dior2 from "../assets/dior2.jpg";

const Home = () => {
    return (
        <div className="relative">
            <div className="flex h-3/5 min-h-[87vh]">
                <div className="relative w-1/2 bg-cover bg-no-repeat bg-center transition border-t-4 border-gray-600 hover:border-gray-900 cursor-pointer filter grayscale transform hover:filter-none transition duration-500" style={{ backgroundImage: `url(${dior1})`, backgroundPosition: 'left', backgroundPositionY: '-320px', verticalAlign: 'top', textShadow: '#000 0px 3px 20px'}}>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center text-3xl text-white">Fashion</div>
                    </div>
                </div>
                <div className="relative w-1/2 bg-cover bg-no-repeat bg-center transition border-t-4 border-gray-600 hover:border-gray-900 cursor-pointer filter grayscale transform hover:filter-none transition duration-500" style={{ backgroundImage: `url(${rings1})`, backgroundPosition: 'left', backgroundPositionX: '-110px', verticalAlign: 'top', textShadow: '#000 0px 3px 20px' }}>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-center text-3xl text-white">Accessories</div>
                    </div>
                </div>
            </div>
            <div className="h-8 bg-zinc-900 text-white flex items-center justify-center">
                <p className="font-light">✦ ✦ ✦ ✦</p>
            </div>

            <div className="bg-zinc-200">
                <p className="text-center text-3xl font-semibold underline underline-offset-4 py-4">OUR LOOKS</p>

                <div className="grid grid-cols-4 gap-3 mt-1">
                    <div className="card border border-gray-900">
                        <img src={dior1} alt="dior1" className="w-full object-cover" style={{height: '30rem'}}/>
                        <p className="bg-gray-100 text-center text-xl font-semibold">View Products</p>
                        <p className="bg-gray-100 text-center text-gray-500 text">@zay34</p>
                    </div>
                    <div className="card border border-gray-900">
                        <img src={rings1} alt="rings1" className="w-full object-cover" style={{height: '30rem'}} />
                        <p className="bg-gray-100 text-center text-xl font-semibold">View Products</p>
                        <p className="bg-gray-100 text-center text-gray-500 text">@zay34</p>
                    </div>
                    <div className="card border border-gray-900">
                        <img src={dior2} alt="dior2" className="w-full object-cover" style={{height: '30rem'}}/>
                        <p className="bg-gray-100 text-center text-xl font-semibold">View Products</p>
                        <p className="bg-gray-100 text-center text-gray-500 text">@zay34</p>
                    </div>
                    <div className="card border border-gray-900">
                        <img src={dior1} alt="dior1" className="w-full object-cover" style={{height: '30rem'}}/>
                        <p className="bg-gray-100 text-center text-xl font-semibold">View Products</p>
                        <p className="bg-gray-100 text-center text-gray-500 text">@zay34</p>
                    </div>
                </div>
                <p className="text-white text-4xl">text</p>
            </div>
        </div>
    );
};

export default Home;