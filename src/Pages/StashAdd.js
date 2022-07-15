import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function StashAdd({ url, stash, setStash, getStash, yarn, setYarn, getYarn }) {

    const navigate = useNavigate()

const [brand, setBrand] = useState('')
const [colorName, setColorName] = useState('')
const [colorCode, setColorCode] = useState('')
const [yardage, setYardage] = useState('')
const [grams, setGrams] = useState('')
const [description, setDescription] = useState('')

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
            <form className='stashedit' onSubmit={handleSubmit}>
            <label>Brand</label>
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
            <label>Color</label>
            <input
                type='text'
                required
                value={colorCode}
                onChange={(e) => setColorCode((e.target.value))}/>
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
                onChange={(e) => setDescription((e.target.value))}/>

            <button type='submit'>Save</button>
        </form>
            
            </div>
        
        
        
        </div>
  )
}

export default StashAdd