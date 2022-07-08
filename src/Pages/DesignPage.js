import React from 'react'
import './DesignPage.css'
import Header from '../components/Header'
import Checkers from '../components/Checkers'
import ColorPicker from '../components/ColorPicker'
import SockImage from '../components/SockImage'
import CreateForm from '../components/CreateForm'
import Sock from '../images/sockart.svg'

function DesignPage({url}) {
  return (
        <div>
            <Header />

            <br/><br/>

            <div className="main">
            <CreateForm url={url}/>
            {/* <img src={Sock} alt='sock' className='sock'/> */}
            <SockImage/>
            <ColorPicker/>
  
            </div>
    
        </div>
  )
}

export default DesignPage