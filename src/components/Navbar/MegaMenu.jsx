import { Link } from 'react-scroll';
import React, { useState } from 'react';

const MegaMenu = () => {
  
  const handleBuy = () => {
  };

  return (
    <div className="flex flex-col py-12 sm:hidden">
      <ul className="flex flex-col gap-12">
        <li className="nav-link text-4xl text-center">
          <Link to="about" duration={500} smooth={true}>
            About
          </Link>
        </li>
        <li className="nav-link text-4xl text-center">
          <Link to="tokenomics" duration={500} smooth={true}>
            Tokenomics
          </Link>
        </li>
        <li className="nav-link text-4xl text-center">
          <Link to="roadmap" duration={500} smooth={true}>
            Roadmap
          </Link>
        </li>
        <li className="nav-link text-4xl text-center">
          <Link to="how-to-buy" duration={500} smooth={true}>
            How to Buy
          </Link>
        </li>
      </ul>
      
      <div className="relative mt-12">
        <button 
          className="buy-btn bg-green-600 text-white font-bold text-md lg:text-lg px-8 py-4 rounded-full shadow-md hover:bg-green-400"
          onClick={handleBuy}
        >
          <i>Buy STT</i>
        </button>

      
      </div>
    </div>
  );
};

export default MegaMenu;