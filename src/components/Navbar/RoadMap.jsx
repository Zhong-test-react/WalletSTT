import React from 'react';
import RoadMapCard from './RoadMapCard';

const RoadMap = ({ items }) => {
  return (
    <div
      className="bg-gradient-to-b from-[#3794fb] to-[#00e1ff] flex flex-col items-center py-10 w-full"
      id="roadmap"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-Matemasie text-white text-mid-shadow mb-4">
        Roadmap
      </h1>
      <RoadMapCard phaseNum={1} items={items[0]} />
      <div className="text-yellow-500 text-4xl">⬇️</div>
      <RoadMapCard phaseNum={2} items={items[1]} />
      <div className="text-yellow-500 text-4xl">⬇️</div>
      <RoadMapCard phaseNum={3} items={items[2]} />
    </div>
  );
};

export default RoadMap;
