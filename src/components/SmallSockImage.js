import React, { useState } from 'react'
import './SmallSockImage.css'
import WholeSock from './sockshapes/Wholesock'
import AnkleS from './sockshapes/Ankleshape'
import FootS from './sockshapes/Footshape'
import HeelS from './sockshapes/Heelshape'
import ToeS from './sockshapes/Toeshape'
import RibS from './sockshapes/Ribshape'



function SmallSockImage({color}) {

  const [newColor, setNewColor] = useState('yellow')
  const [toeColor, setToeColor] = useState('yellow')
  const [ankleColor, setAnkleColor] = useState('yellow')
  const [heelColor, setHeelColor] = useState('yellow')
  const [footColor, setFootColor] = useState('yellow')
  const [ribColor, setRibColor] = useState('yellow')

  const getColor = (x) => {
    if (x === 'rib') {
      setRibColor(color);
      color = '#fff'
    } else if (x === 'ankle') {
      setAnkleColor(color)
    } else if (x === 'foot') {
      setFootColor(color)
    } else if (x === 'heel') {
      setHeelColor(color)
    } else if (x === 'toe') {
      setToeColor(color)
    }
  }


  return (
    <div className='page-cont'>

      <WholeSock />
      <RibS onClick={() => getColor('rib')} style={{fill: ribColor}}/>
      <AnkleS onClick={() => getColor('ankle')} style={{fill: ankleColor}}/>
      <FootS onClick={() => getColor('foot')} style={{fill: footColor}}/>
      <HeelS onClick={() => getColor('heel')} style={{fill: heelColor}}/>
      <ToeS onClick={() => getColor('toe')} style={{fill: toeColor}}/>
  
    </div>
  )
}

export default SmallSockImage