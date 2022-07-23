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
        
        <h1></h1>
        

        
        
        <form className='addstashform' >


        <div className='designbuttons' style={{display:'flex', width:'60vw', justifyContent:'space-between', alignItems:'center'}}>

<Link to={`/stash/yarn/${id}`}> <div className='knitStatus custButt' style={{backgroundColor:'orange'}} >CANCEL</div></Link>

<h1 style={{margin:'0px'}}>Edit Yarn</h1>

<div className='custButt knitStatus' onClick={handleSubmit}>SAVE</div> 

</div>

           <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', width:'60vw'}}>

            <div>
            <div className='addyarn'>
            <br/><br/>    
            <label>Brand</label>
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
                onChange={() => setColorCode(color)}
                />
                <br/>
                <div  style={{width:'223px', height:'50px', border:"1px solid black", backgroundColor:color}} onClick={() => setShow(prev => !prev)}></div>
<div>
            <ChromePicker disableAlpha={true} color={color} onChange={updatedColor => {return (setColor(updatedColor.hex), setColorCode(updatedColor.hex))}}/>
            
        
            {/* <h2>You picked {color}, {colorCode}</h2>  */}
            </div> 
 


</div> 
                
            </div>    
           
           
           </div>
        
                
               

<br/>
       
            
        </form>
            
        <div style={{height: '200px'}}></div>

        </div>
    
    
    
    </div>
  )
}

export default StashEdit