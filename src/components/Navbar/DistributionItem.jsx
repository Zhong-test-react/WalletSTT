import React from 'react';
import OrangeCloud from '../../assets/images/6125401561086673076.png';
import GreenCloud from '../../assets/images/6125401561086673077.jpg';
import RedCloud from '../../assets/images/6125401561086673078.jpg';
import BlueCloud from '../../assets/images/6125401561086673079.jpg';
import PinkCloud from '../../assets/images/6125401561086673080.jpg';

const DistributionItem = ({ color, percentage, label }) => {
  let imgSrc = '';
  switch (color) {
    case 'orange':
      imgSrc = OrangeCloud;
      break;
    case 'red':
      imgSrc = RedCloud;
      break;
    case 'green':
      imgSrc = GreenCloud;
      break;
    case 'blue':
      imgSrc = BlueCloud;
      break;
    case 'pink':
      imgSrc = PinkCloud;
      break;
    default:
      break;
  }
  return (
    <div className="flex items-center">
      {/* Colored bubble */}
      <img src={imgSrc} alt='' className="w-15 h-10"></img>
      {/* Percentage and label */}
      <span className="bright-cyan font-extrabold text-xl md:text-2xl ml-8">
        {percentage} = {label}
      </span>
    </div>
  );
};

export default DistributionItem;
