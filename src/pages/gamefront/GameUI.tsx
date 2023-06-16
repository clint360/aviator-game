import * as React from 'react';
import './GameUI.css'
import { BetControl } from '../../core/components/organisms/betcontrol/BetControl';
import { GraphicScreen } from '../../core/components/organisms/graphicscreen/GraphicScreen';
import { Infoboard } from '../../core/components/organisms/infoboard/Infoboard';
import { Navbar } from '../../core/components/organisms/navbar/Navbar';
import { RoundHistoryLine } from '../../core/components/organisms/roundhistoryline/RoundHistoryLine';
import { Provider } from '../../core/data/context/Context';

export function GameUI() {

  const [appBackground, setAppBackground] = React.useState("#151515");

  return (
    <Provider value={{ appBackground }}>
      <div className='gameUI'>
      <Navbar />
      <div className="gameUISection">      
      <div className="block-one">
      <Infoboard />
      </div>
      <div className="block-two">
      <RoundHistoryLine />
      <GraphicScreen />
      <div className="two-bet-controls">
      <div><BetControl /></div>
      <div><BetControl /></div>
      </div>
      </div>
  </div>
    </div>
    </Provider>
  )
}

