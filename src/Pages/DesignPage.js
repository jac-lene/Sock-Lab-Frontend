import React, { useState } from 'react'
import './DesignPage.css'
import Header from '../components/Header'
import ColorPicker from '../components/ColorPicker'
import { SwatchesPicker } from 'react-color'
import SockImage from '../components/SockImage'
import CreateForm from '../components/CreateForm'
import Sock from '../images/sockart.svg'

function DesignPage({url}) {
  const [color, setColor] = useState('#fff')

  return (
        <div>
            <Header />
            <div className="main">
            <CreateForm url={url}/>
            {/* <img src={Sock} alt='sock' className='sock'/> */}
            <SockImage color={color} />
          
        <div className='color-picker'>
        <br/><br/>
        <SwatchesPicker width={1000} height={160} color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>

        <h2>You picked {color}</h2>

        {/* <CirclePicker width={1000} colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#8bc34a"]}/> */}
        
    </div>
            </div>

            
        </div>
  )
}

export default DesignPage