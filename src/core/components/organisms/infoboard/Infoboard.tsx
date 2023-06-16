import * as React from 'react';
import { AppContext } from '../../../data/context/Context';
import './Infoboard.css';
export function Infoboard() {
    const { appBackground } = React.useContext(AppContext);

  return (
    <div className='infoboard' style={{background: appBackground}}>
          Info Board Here
    </div>
  )
}