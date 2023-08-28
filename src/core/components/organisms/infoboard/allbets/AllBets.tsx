import React from 'react';
import RoundMultiplier from '../../roundhistoryline/components/RoundMultiplier';
import './AllBets.css'
import Row from './components/Row';
import RowHeader from './components/RowHeader';

function AllBets() {
  return (
    <div className='allbets'>
      <div className="allbetstop">
        <div>ALL BETS</div>
        <div>412</div>
      </div>
      <div className="betstable">
        <RowHeader />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  )
}

export default AllBets
