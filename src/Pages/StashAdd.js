import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { SliderPicker, ChromePicker } from 'react-color'
import ColorPicker from '../components/ColorPicker'

function StashAdd({ url, stash, setStash, getStash, yarn, setYarn, getYarn }) {

    const navigate = useNavigate()
const [color, setColor] = useState('#02ff64')
const [brand, setBrand] = useState('')
const [colorName, setColorName] = useState('')
const [colorCode, setColorCode] = useState(color)
const [yardage, setYardage] = useState('')
const [grams, setGrams] = useState('')
const [description, setDescription] = useState('')

const [show, setShow] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault();
    const newYarn = {
        brand, colorName, colorCode, yardage, grams, description
    };

   fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newYarn),
        }).then(() => {
            console.log('new yarn', newYarn)
            setStash([...stash], newYarn)
            getStash()
            navigate('/stash')
        })

}



  return (
    <div>
        <Header/>
        <div className='main'>
            
            <h1>Stash Add</h1>

            <form className='addstashform' onSubmit={handleSubmit}>
            
            <button type='submit'>Save</button>
                <br/><br/>
                <div className='addyarn'><label>Brand</label>
            <input
                type='text'
                required
                value={brand}
                onChange={(e) => setBrand((e.target.value))}/>
            <label>Color Name</label>
            <input
                type='text'
                value={colorName}
                onChange={(e) => setColorName((e.target.value))}/>

            <label>Yardage</label>
            <input
                type='text'
                value={yardage}
                onChange={(e) => setYardage((e.target.value))}/>
            <label>Grams</label>
            <input
                type='text'
                value={grams}
                onChange={(e) => setGrams((e.target.value))}/>
            <label>Description</label>
            <input
                type='text'
                value={description}
                onChange={(e) => setDescription((e.target.value))}/></div>
            
<br/><br/>
<div className='colorPick'>
<label>Color (click to change):</label>
<input
                className='invisible'
                type='text'
                required
                value={colorCode}
                onChange={() => setColorCode(color)}
                
                />
                <br/><br/>
                <div style={{width:'100px', height:'100px', border:"1px solid black", backgroundColor:color}} onClick={() => setShow(prev => !prev)}></div>
{show ? <div>
                <br/><br/>
            <ChromePicker disableAlpha={true} color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>
            
        
            {/* <h2>You picked {color}</h2>  */}
            </div> : null}
 
</div>

            
        </form>
            
        <div style={{height: '200px'}}></div>

            </div>
        
        </div>
  )
}

export default StashAdd