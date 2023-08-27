import React from 'react';
import './UnderMask.scss';

const UnderMask = () => {
  return (
    <div className="under-mask">
      {Array.from({ length: 105 }, (_, index) => (
        <div key={index} className="under-mask--cell">
            
        </div>
      ))}
    </div>
  );
};

export default UnderMask;