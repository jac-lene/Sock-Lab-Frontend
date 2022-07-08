import React from 'react'
import './DesignPage.css'
import Header from '../components/Header'
import Checkers from '../components/Checkers'
import ColorPicker from '../components/ColorPicker'
import SockImage from '../components/SockImage'

function DesignPage() {
  return (
        <div>
            <Header />

            <br/><br/>

            <div className="main">
              
            <SockImage/>
            <ColorPicker/>
  
            </div>
    
        </div>
  )
}

export default DesignPage