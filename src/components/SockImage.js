import React from 'react'
import SockArt from '../images/sockart.svg'
import './SockImage.css'
import Rib from '../images/sockparts/rib.svg'
import Ankle from '../images/sockparts/ankle.svg'
import Heel from '../images/sockparts/heel.svg'
import Foot from '../images/sockparts/foot.svg'
import Toe from '../images/sockparts/toe.svg'


function SockImage() {
  return (
    <div className='sockcomp'>
    <div className='sock-holder'>
        {/* <img src="https://i.imgur.com/1gs2nxk.png" alt='sock design image' className='sock'/> */}
        {/* <img src={SockArt} alt='sock' className='sock'/> */}
        <div>
        <img src={Rib} alt='sock' className='sock rib'/>
        <img src={Ankle} alt='sock' className='sock ankle'/>
        <img src={Heel} alt='sock' className='sock heel'/>
        <img src={Foot} alt='sock' className='sock foot'/>
        <img src={Toe} alt='sock' className='sock toe'/>
        </div>
    </div>
    </div>
  )
}

export default SockImage