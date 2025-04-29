import React from 'react';

const bubblesArray = [1, 2, 3, 4, 5]; // You can add more bubbles if you want!

const Bubbles = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {bubblesArray.map((bubble, index) => (
        <span key={index} className={`bubble bubble-${bubble}`}></span>
      ))}
    </div>
  );
};

export default Bubbles;
