import React, { useState } from 'react'
import './SmallSockImage.css'
import WholeSock from './sockshapesSmall/Wholesock'
import AnkleS from './sockshapesSmall/Ankleshape'
import FootS from './sockshapesSmall/Footshape'
import HeelS from './sockshapesSmall/Heelshape'
import ToeS from './sockshapesSmall/Toeshape'
import RibS from './sockshapesSmall/Ribshape'



function SmallSockImage({ rib, ankle, heel, foot, toe }) {

  return (
    <div>
    <div className='smallpage-cont'>

      <WholeSock />
      <RibS style={{fill: rib}}/>
      <AnkleS style={{fill: ankle}}/>
      <FootS style={{fill: foot}}/>
      <HeelS style={{fill: heel}}/>
      <ToeS style={{fill: toe}}/>
  
    </div>
   
    </div>
  )
}

export default SmallSockImage