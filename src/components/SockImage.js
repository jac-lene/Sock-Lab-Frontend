import React from 'react'
import SockArt from '../images/sockart.svg'
import './SockImage.css'
import WholeSock from '../components/sockshapes/Wholesock'
import AnkleS from '../components/sockshapes/Ankleshape'
import FootS from '../components/sockshapes/Footshape'
import HeelS from '../components/sockshapes/Heelshape'
import ToeS from '../components/sockshapes/Toeshape'
import RibS from '../components/sockshapes/Ribshape'



function SockImage() {
  return (
    <div className='page-cont'>

        {/* <img src="https://i.imgur.com/1gs2nxk.png" alt='sock design image' className='sock'/> */}
        {/* <img src={SockArt} alt='sock' className='sock'/> */}
        
        {/* <img src={Rib} alt='sock' className='sock rib' />
        <img src={Ankle} alt='sock' className='sock ankle'/>
        <img src={Heel} alt='sock' className='sock heel'/>
        <img src={Foot} alt='sock' className='sock foot' style={{stroke:'red'}}/>
        <img src={Toe} alt='sock' className='sock toe'/>
         */}
      <WholeSock />
      <RibS />
      <AnkleS />
      <FootS />
      <HeelS />
      <ToeS />
  
      
        



    </div>
  )
}

export default SockImage