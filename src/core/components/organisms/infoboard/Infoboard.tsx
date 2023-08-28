import * as React from 'react';
import { AppContext } from '../../../data/context/Context';
import AllBets from './allbets/AllBets';
import TopInfoBoard from './components/TopInfoBoard';
import './Infoboard.css';
export function Infoboard() {
    const { appBackground } = React.useContext(AppContext);
    const [DisplayComponent, setDisplayComponent] = React.useState(<AllBets />);

  return (
    <div className='infoboard' style={{background: appBackground}}>
          <TopInfoBoard setView={(val: any)=>{setDisplayComponent(val)}} />
          {DisplayComponent}
    </div>
  )
}