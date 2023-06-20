import * as React from 'react';
import { AppContext } from '../../../data/context/Context';
import './Navbar.css';

export function Navbar() {
  const { appBackground } = React.useContext(AppContext);

  return (
    <nav className='navbar' style={{background: appBackground}}>
      <div className="logodiv">
        Aviator
      </div>
      <div className="righthanddiv">
        <div className="howtoplay">
       <div className='questionMark'><i className="fa-sharp fa-regular fa-question"></i></div><div className='htptext'>How to play?</div> 
        </div>
        <div className="balanceandmenu">
            <div className="balance">
             <span className="actualcashbalance">3000.00</span>
             <span className="currency">USD</span>
            </div>
            <div className="menu">
            <i className="fa-solid fa-bars"></i>
            </div>
        </div>
      </div>
    </nav>
  )
}

