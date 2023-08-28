import React, { useEffect, useState } from 'react';
import './styles/UIView.css';
import rocket from './assets/Rocket.png';
import rocketCrashed from './assets/c.png';
import videoAnimation from './assets/vbg.mp4';
import videoAnimation2 from './assets/vbg2.mp4';
import SecondCounter from './components/SecondCounter';
import useSound from 'use-sound'
import bomb from './assets/bomb.wav';
import music from './assets/gamesound.mp3';
import riser from './assets/gameriser.mp3';

function UI() {
    //Game Constants
    const [gameState, setGameState] = useState(true);
    const [multiplier, setMultiplier] = useState(1);
    const [userStake, setUserStake] = useState(100);
    const [userProfit, setUserProfit] = useState(0)

    //Rocket Constants
    const [rocketAngle, setRocketAngle] = useState(340);
    const [rocketX, setRocketX] = useState(0);
    const [rocketY, setRocketY] = useState(0);
    const [points, setPoints] = useState([]);
    const [rocketSpeed ] = useState(0.1);
    const [maxValue, setMaxValue] = useState(parseFloat((Math.random()*6 + 1).toFixed(2)));
    const [playBombSound, pbF ] = useSound(bomb);
    const [playMusic ] = useSound(music);
    const [playRiser, prF ] = useSound(riser);

    //Styles
    const rocketContainerStyle = {
        bottom: `${rocketY}px`,
        left: `${rocketX}px`,
        transform: `rotate(${rocketAngle}deg)`
    }

    //startSounds 
    useEffect(()=>{
     playMusic();
     playRiser();
    },[playMusic, playRiser])

    //Set Game State
    useEffect(() => {
        if (multiplier < (maxValue - 0.01)){
        const interval = setInterval(() => {
          setMultiplier(multiplier + 0.001);
          setUserProfit((multiplier*userStake - userStake).toFixed(2))
        }, rocketSpeed);
    
        return () => {
          clearInterval(interval);
        };
    } else {
        prF.pause();
        playBombSound();
        pbF.pause();
        setGameState(false)
    }
      }, [maxValue, multiplier, playBombSound, prF, rocketSpeed, userStake]);

    //Modify Rocket Angle
    useEffect(()=> {
        if (gameState) {
          if( rocketX < 650) {
        if (rocketAngle > 270) {
        const interval = setInterval(() => {
            setRocketAngle(rocketAngle - 1);
          }, 100);
    
          return () => {
            clearInterval(interval);
          };
        }}
      }
    },[rocketAngle])


    //Draw Curve
    useEffect(()=> {
        if (gameState === true) {
          if (rocketX < 650) {
        const k = 0.0009; // Adjust the value of k as desired for the desired curve behavior
        const interval = setInterval(() => {
        const newX = points.length;
        const newY = newX * (1 - Math.exp(-k * newX));
        const newPoints = [...points, { x: newX, y: newY }];
        setPoints(newPoints);
        setRocketX(newX);
        setRocketY(newY);
      }, rocketSpeed);

      return () => {
        clearInterval(interval);
      };
    } else {
        const k = 0.0009; // Adjust the value of k as desired for the desired curve behavior
        const interval = setInterval(() => {
        const newX = points.length;
        const newY = newX * (1 - Math.exp(-k * newX));
        const newPoints = [...points, { x: newX, y: newY }];
        setPoints(newPoints);
        setRocketX(newX);
        setRocketY(newY);
      }, 1500);

      return () => {
        clearInterval(interval);
      };

    }
    } else {

    }
    },[gameState, points, rocketSpeed, rocketX, rocketY])



    return (
      <>
        <div className='uiview'>
            <div className='multiplier'>
                {multiplier.toFixed(2)}x
                <div className='yourprofit'>Your Profit</div>
                <div className='userprofit'>${userProfit}</div>
            </div>
            <div>
            <div
                className='rocket-container'
                style={rocketContainerStyle}
            >
                <img src={gameState === true ? rocket
                    : rocketCrashed} alt="rocket" />
            </div>
    <div className='curve-container'>
    <svg>
          <polyline
            fill="none"
            stroke="#ddff57"
            strokeWidth="7"
            points={points.map(point => `${point.x},${100 - point.y}`).join(' ')}
          />
        </svg>
      </div>
      </div>
      <div className='animation'>
      <video className='videoTag' autoPlay loop muted>
    <source src={rocketX < 650 ? videoAnimation : videoAnimation2} type='video/mp4' />
     </video>
      </div>
       <div className='counter-div'>
       <SecondCounter gamePlaying={gameState} />
       </div>
    </div>
    <br />
    <br />
    </>
    )
}

export default UI
