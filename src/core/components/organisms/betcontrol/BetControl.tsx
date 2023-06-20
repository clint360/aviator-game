import * as React from 'react';
import { AppContext } from '../../../data/context/Context';
import './BetControl.css'

export function BetControl() {
   const { appBackground } = React.useContext(AppContext);

  return (
    <div className="betcontrol" style={{background: appBackground}}>
        Bet Control Here
    </div>
  )
}
