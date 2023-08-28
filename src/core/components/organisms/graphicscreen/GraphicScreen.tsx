import * as React from 'react';
import { AppContext } from '../../../data/context/Context';
import './GraphicScreen.css'
import UI from './src/UI';

export function GraphicScreen() {
    const { appBackground } = React.useContext(AppContext);
  return (
    <div className="graphicScreen" style={{background: appBackground}}>
        <UI />
    </div>
  )
}

