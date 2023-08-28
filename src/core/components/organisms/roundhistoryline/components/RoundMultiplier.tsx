import React from 'react';
import './RoundMultiplier.css';

function RoundMultiplier({value, color}: any) {
    const bubbleStyle = {
        color: color || 'green'
    }
  return (
    <div className='roundbubble' style={bubbleStyle}>
      {value}x
    </div>
  )
};

export default RoundMultiplier
