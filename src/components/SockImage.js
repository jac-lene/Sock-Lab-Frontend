import React, { useState } from 'react'
import './SockImage.css'
import WholeSock from '../components/sockshapes/Wholesock'
import AnkleS from '../components/sockshapes/Ankleshape'
import FootS from '../components/sockshapes/Footshape'
import HeelS from '../components/sockshapes/Heelshape'
import ToeS from '../components/sockshapes/Toeshape'
import RibS from '../components/sockshapes/Ribshape'



function SockImage({color}) {

  const [newColor, setNewColor] = useState('#fff')
  const [toeColor, setToeColor] = useState('#fff')
  const [ankleColor, setAnkleColor] = useState('#fff')
  const [heelColor, setHeelColor] = useState('#fff')
  const [footColor, setFootColor] = useState('#fff')
  const [ribColor, setRibColor] = useState('#fff')

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

export default SockImage