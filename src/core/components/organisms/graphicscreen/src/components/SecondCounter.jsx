import React, { useState, useEffect } from 'react';
import './SecondCounter.css';

const SecondCounter = ({gamePlaying}) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if(gamePlaying=== true) {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }
  }, [gamePlaying]);

  const getBlinkClassName = () => {
    return seconds % 1 === 0 ? 'blink-effect' : '';
  };

  const getColorClassName = () => {
    if (seconds < 5) {
      return 'color-primary';
    } else if (seconds < 7) {
      return 'color-secondary';
    } else {
      return 'color-tertiary';
    }
  };

  return (
    <div className="second-counter">
      <h1 className={`counter ${getBlinkClassName()} ${getColorClassName()}`}>{seconds}s</h1>
    </div>
  );
};

export default SecondCounter;

