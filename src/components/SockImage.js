import React, { useState } from 'react'
import './SockImage.css'
import WholeSock from '../components/sockshapes/Wholesock'
import AnkleS from '../components/sockshapes/Ankleshape'
import FootS from '../components/sockshapes/Footshape'
import HeelS from '../components/sockshapes/Heelshape'
import ToeS from '../components/sockshapes/Toeshape'
import RibS from '../components/sockshapes/Ribshape'



function SockImage() {

  const [clicked, setClicked] = useState('')
  
  const clickAlert = (x) => {
    setClicked(x);
    console.log('clicked', x, clicked)
  }



  return (
    <div className='page-cont'>

      <WholeSock />
      <RibS onClick={() => clickAlert('rib')} />
      <AnkleS onClick={() => clickAlert('ankle')}/>
      <FootS onClick={() => clickAlert('foot')}/>
      <HeelS onClick={() => clickAlert('heel')}/>
      <ToeS onClick={() => clickAlert('toe')}/>
  
    </div>
  )
}

export default SockImage