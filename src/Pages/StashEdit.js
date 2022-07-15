import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ChromePicker } from 'react-color'
import Header from '../components/Header'

function StashEdit({ url, stash, setStash, getStash, yarn, setYarn, getYarn, updateYarn }) {

    const id = useParams().id
    const navigate = useNavigate()

useEffect(() => {
    getYarn(id)
}, [])


const [colorCode, setColorCode] = useState(yarn?.colorCode)
const [color, setColor] = useState(yarn?.colorCode)
const [brand, setBrand] = useState(yarn?.brand)
const [colorName, setColorName] = useState(yarn?.colorName)
const [yardage, setYardage] = useState(yarn?.yardage)
const [grams, setGrams] = useState(yarn?.grams)
const [description, setDescription] = useState(yarn?.description)
const [show, setShow] = useState(false)


const handleSubmit = (e) => {
    e.preventDefault();
    const updatedYarn = {
        brand, colorName, colorCode, yardage, grams, description
    };

   fetch(url+id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedYarn),
        }).then(() => {
            console.log('updated yarn', updatedYarn)
            getStash()
            getYarn(id)
            navigate(`/stash/yarn/${id}`)
        })
}


if (!yarn) {
    console.log('loading')
}

  return (
    <div>
        <Header/>
    <div className='main'>
        
        <h1>Stash Edit</h1>
        

        <Link to={`/stash/yarn/${id}`}><button>Cancel</button></Link>
        
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

{ show ? <div>
                <br/><br/>
            <ChromePicker disableAlpha={true} color={color} onChange={updatedColor => {return (setColor(updatedColor.hex), setColorCode(updatedColor.hex))}}/>
            
        
            {/* <h2>You picked {color}, {colorCode}</h2>  */}
            </div> 
 : null }


</div> 

            
        </form>
            
        <div style={{height: '200px'}}></div>

        </div>
    
    
    
    </div>
  )
}

export default StashEdit