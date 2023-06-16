import * as React from 'react';
import { AppContext } from '../../../data/context/Context';
import './RoundHistoryLine.css'

export function RoundHistoryLine() {
    const { appBackground } = React.useContext(AppContext);
  return (
    <div className="roundhistoryline" style={{background: "none"}}>
      Round History Here
    </div>
  )
}
