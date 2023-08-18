import * as React from 'react';
import { AppContext } from '../../../data/context/Context';
import './BetControl.css'

export function BetControl() {
   const { appBackground } = React.useContext(AppContext);

  return (
    <div className="betcontrol" style={{background: appBackground}}>
        <div className='betcontrol-maindiv'>
          <div className="top">
          <div className="leftofthebetcontrol">
          <div className="inputnumber">
          <button className="minusnumber">
            -
          </button>
          <input type="number" className='amttobeinput' defaultValue={1.00} min={1} max={100} />
          <button className="plusnumber">
            +
          </button>
          </div>
          <div className="maxbutton">
          <button className="maxbtn">Max</button>
          </div>
          </div>
          <div className="rightofthebetcontrol">
            <button className="bet">
             BET <br />
             <span className="betvalue">100.00 USD</span> 
            </button>
          </div>
          </div>
          <div className="bottom">
            <div className="autocashout">
             AutoCashout
            </div>
            <div className="toggle">
             <input type="radio" />
            </div>
            <div className="multipliervalue">
             1.46
            </div>
          </div>
        </div>
    </div>
  )
}
