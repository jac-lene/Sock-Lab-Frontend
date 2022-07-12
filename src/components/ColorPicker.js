import React, { useState } from 'react'
import { SwatchesPicker } from 'react-color'
import { CirclePicker } from 'react-color'

function ColorPicker() {

    const [color, setColor] = useState('#fff')


  return (
    <div className='color-picker'>
        <br/><br/>
        <SwatchesPicker width={1000} height={160} color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>

        <h2>You picked {color}</h2>

        {/* <CirclePicker width={1000} colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#8bc34a"]}/> */}
        
    </div>
  )
}

export default ColorPicker