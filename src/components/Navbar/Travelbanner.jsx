import React from 'react';
import AirplaneImage from '../../assets/images/6125401561086673070.png';

const Travelbanner=()=>{
    const shadowStyle={
        textShadow:'2px 2px 4px 4px(0,0,0,0.5)',
    };
    return(
        
        <div className='flex flex-col items-center font-bold md:w-2/3 md:my-20'
        >
            <h1 className='text-4xl md:text-[60px] mb-4 font-Matemasie text-yellow-400 text-shadow leading-normal'style={shadowStyle}>
                Everyone Can Travel
            </h1>
            <p className='wendy-one-regular text-3xl md:text-[48px] font-semibold text-white text-shadow text-center mt-10 leading-tight' style={shadowStyle}>
                Let's everyone can enjoy their dreams holiday trips
            </p>
            <img
            src={AirplaneImage} alt='overlay' className='w-81 h-70 text-shadow'
            >    
            </img>
        </div>
        
    );
};
export default Travelbanner;