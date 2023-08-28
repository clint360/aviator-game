import React, { useState } from 'react';
import AllBets from '../allbets/AllBets';
import MyBets from '../mybets/MyBets';
import Top from '../top/Top';
import './TopInfoBoard.css';

function TopInfoBoard({ setView}: any) { 
    const [bgleftposition, setBgLeftPosition] = useState(10);

    const navToAllBets = () => {
        setView(<AllBets />)
        setBgLeftPosition(10)
    }
    const navToMyBets = () => {
        setBgLeftPosition(36.33)
        setView(<MyBets />)
    }
    const navToTop = () => {
        setView(<Top />)
        setBgLeftPosition(62.67)
    }

    const bgStyle = {
        left: `${bgleftposition}%`
    }
  return (
    <div className='topinfoboard'>
      <div className="bg" style={bgStyle}></div>
      <div className="topinfoboardnav">
        <div onClick={navToAllBets}>All Bets</div>
        <div onClick={navToMyBets}>My Bets</div>
        <div onClick={navToTop}>Top</div>
      </div>
    </div>
  )
}

export default TopInfoBoard
