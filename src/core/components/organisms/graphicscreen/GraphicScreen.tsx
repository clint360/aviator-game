import * as React from 'react';
import { AppContext } from '../../../data/context/Context';
import './GraphicScreen.css'

export function GraphicScreen() {
    const { appBackground } = React.useContext(AppContext);
  return (
    <div className="graphicScreen" style={{background: appBackground}}>
        graphic screen here
    </div>
  )
}

