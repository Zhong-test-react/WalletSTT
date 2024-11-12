import React from 'react';
import iconMegaMenu from '../../assets/images/mega-menu.svg';
import MegaMenu from './MegaMenu';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  const handleBuy = () => {
    console.log('clicked buy');
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="Navbar w-full flex flex-col items-center">
      <div className="max-sm:px-3 max-sm:justify-between flex w-[95%] lg:w-[90%] justify-end items-center py-3 md:py-10">
        <ul className="max-sm:hidden flex md:space-x-12 space-x-8">
          <li className="nav-link text-[18px] lg:text-[24px]">
            <Link to="about" duration={500} smooth={true}>
              About
            </Link>
          </li>
          <li className="nav-link text-[18px] lg:text-[24px]">
            <Link to="tokenomics" duration={500} smooth={true}>
              Tokenomics
            </Link>
          </li>
          <li className="nav-link text-[18px] lg:text-[24px]">
            <Link to="roadmap" duration={500} smooth={true}>
              Roadmap
            </Link>
          </li>
          <li className="nav-link text-[18px] lg:text-[24px]">
            <Link to="how-to-buy" duration={500} smooth={true}>
              How to Buy
            </Link>
          </li>
        </ul>
        <div className="sm:hidden">
          <img
            className="!flex !visible"
            src={iconMegaMenu}
            alt="show menu"
            onClick={handleDropdownToggle}
          ></img>
        </div>
        <button
          className="buy-btn ml-8 md:ml-14 bg-green-600 text-white font-bold text-md lg:text-lg px-8 py-4 rounded-full shadow-md hover:bg-green-400"
          onClick={handleBuy}
        >
          <i>Buy STT</i>
        </button>
      </div>
      {isDropdownOpen && <MegaMenu />}
    </div>
  );
};

export default Navbar;
