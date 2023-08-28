import * as React from 'react';
import { AppContext } from '../../../data/context/Context';
import RoundMultiplier from './components/RoundMultiplier';
import './RoundHistoryLine.css'

export function RoundHistoryLine() {
    const { appBackground } = React.useContext(AppContext);
  return (
    <div className="roundhistoryline" style={{background: "none"}}>
      <div><RoundMultiplier value={1.24} color='red' /></div>
      <div><RoundMultiplier value={2.26} /></div>
      <div><RoundMultiplier value={1.26} color='blue' /></div>
      <div><RoundMultiplier value={1.29} /></div>
      <div><RoundMultiplier value={1.24} color='red' /></div>
      <div><RoundMultiplier value={2.26} /></div>
    </div>
  )
}
