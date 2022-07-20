import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { SliderPicker, ChromePicker } from 'react-color'
import ColorPicker from '../components/ColorPicker'

function StashAdd({ url, stash, setStash, getStash, yarn, setYarn, getYarn }) {

    const navigate = useNavigate()
const [color, setColor] = useState('#701619')
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
            
           

            <form className='addstashform' >

            <div className='designbuttons' style={{display:'flex', width:'70vw', justifyContent:'space-between', alignItems:'center'}}>

            <div className='designbuttons'>

            <div className='knitStatus custButt' style={{backgroundColor:'orange'}} onClick={() => navigate('/stash')}>CANCEL</div>  </div>

<h1 style={{margin:'0px'}}>Add Yarn</h1>

<div className='custButt knitStatus' onClick={handleSubmit}>SAVE</div> 

</div>
            <br/>

                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', width:'60vw'}}>
                    <div>
                    <br/><br/>     
                <div className='addyarn'><label>Brand</label>
            <input
                type='text'
                required
                value={brand}
                onChange={(e) => setBrand((e.target.value))}/>
                <br/>
            <label>Color Name</label>
            <input
                type='text'
                value={colorName}
                onChange={(e) => setColorName((e.target.value))}/>
<br/>
            <label>Yardage</label>
            <input
                type='text'
                value={yardage}
                onChange={(e) => setYardage((e.target.value))}/>
                <br/>
            <label>Grams</label>
            <input
                type='text'
                value={grams}
                onChange={(e) => setGrams((e.target.value))}/>
                <br/>
            <label>Description</label>
            <input
                type='text'
                value={description}
                onChange={(e) => setDescription((e.target.value))}/></div>
            
<br/><br/>
                    </div> 
                    
                    <div>
               
                    <div className='colorPick'>
<label>Color</label>
<input
                className='invisible'
                type='text'
                required
                value={colorCode}
                onChange={() => {
                    setColorCode(color);
                    console.log(color)}}
                
                />
               
                <div style={{width:'223px', height:'50px', border:"1px solid black", backgroundColor:color}} onClick={() => setShow(prev => !prev)}>
                <br/>
                </div>
<div>
                
            <ChromePicker disableAlpha={true} color={color} onChange={updatedColor => {return (setColor(updatedColor.hex), setColorCode(updatedColor.hex))}}/>
            
        
            {/* <h2>You picked {color}</h2>  */}
            </div>
 
</div>
                    </div>

                </div>
            
           

<br/><br/>


        </form>
            
        <div style={{height: '200px'}}></div>

            </div>
        
        </div>
  )
}

export default StashAdd