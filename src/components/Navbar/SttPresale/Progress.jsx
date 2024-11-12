import React from 'react';  

const Progress = () => {  
    const currentPrice = 0.10; // Example current price  
    const nextPrice = 0.14; // Example next price 
    const total=67640000;
    const raised=36666668;

    const progress=(raised/total)*100;  // Example progress percentage to represent the current price  


    return (  
            <div className="border-4 border-white p-6 bg-blue-600 rounded-lg text-white text-center">  
            <p className="text-lg font-semibold text-gray-700">RAISED</p>
            <p className="text-xl md:text-2xl font-bold text-yellow-500 mb-2">${raised.toLocaleString()} / ${total.toLocaleString()}</p>
                <h1 className="text-xl font-bold mb-4 text-text-shadow">Buy in Before Price Increase</h1>  
                <div className="relative w-full">  
                    <div className="bg-gray-300 rounded-full h-6 overflow-hidden">  
                        <div  
                            className="bg-green-500 h-full rounded-full transition-all duration-300"  
                            style={{ width: `${progress}%` }}  
                        ></div>  
                    </div>  
                    <div className="flex justify-between mt-2">  
                        <span>Current Price: ${currentPrice.toFixed(2)}</span>  
                        <span className="font-semibold">Next Price: ${nextPrice.toFixed(2)}</span>  
                    </div>  
                </div>  
            </div>  
    );  
};  

export default Progress;  