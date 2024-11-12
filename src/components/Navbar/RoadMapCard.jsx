import React from 'react';
import Cloud1 from '../../assets/images/6125401561086673069.png';
import Cloud2 from '../../assets/images/6125401561086673076.png';

const RoadMapCard = ({ phaseNum, items }) => {
  return (
    <div className="flex items-center relative w-11/12 max-w-xl justify-center">
      {phaseNum === 1 && (
        <img
          src={Cloud1}
          className="max-md:hidden w-40 h-30 absolute -bottom-6 -right-16 z-0"
          alt=""
        ></img>
      )}
      {phaseNum === 2 && (
        <>
          <img
            src={Cloud1}
            className="max-md:hidden w-40 h-30 absolute -top-6 -left-16 z-0"
            alt=""
          ></img>
          <img
            src={Cloud1}
            className="max-md:hidden w-40 h-30 absolute -bottom-6 -right-16 z-0"
            alt=""
          ></img>
        </>
      )}
      {phaseNum === 3 && (
        <img
          src={Cloud1}
          className="max-md:hidden w-40 h-30 absolute -top-6 -left-16 z-0"
          alt=""
        ></img>
      )}
      <div className="relative bg-gradient-to-b from-[#3794fb] to-[#00e1ff] text-white my-6 p-6 rounded-[24px] shadow-xl w-full z-10">
        <h2 className="wendy-one-regular text-2xl font-semibold text-fuchsia-500 mb-4 text-light-shadow">
          Phase {phaseNum}
        </h2>
        <ul className="space-y-3">
          {items.map((item) => {
            return (
              <li className="flex items-center">
                <img src={Cloud2} className="w-12 h-10 " alt=""></img>
                <span className="font-bold sm:text-lg md:text-2xl ml-5 text-light-shadow">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RoadMapCard;
