import React from 'react'
import RoundMultiplier from '../../../roundhistoryline/components/RoundMultiplier'

function Row() {
  return (
      <div className="row rowactive">
            <div className="user">
             <div className="userimage">
               <img src="data:image/jpeg;base64,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" alt="userimage" />
             </div>
             <div className="username">
             d*****1
             </div>
            </div>
            <div className="betusdx">
              <div className="betamount">
                100.00
              </div>
              <div className="valmultiplier">
                <RoundMultiplier value={1.24} color='lightblue' />
              </div>
            </div>
            <div className="cashoutusd">
                 124.00
            </div>
        </div>
  )
}

export default Row
