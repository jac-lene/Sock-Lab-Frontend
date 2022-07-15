import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Header from '../components/Header'

function StashEdit({ url, stash, setStash, getStash, yarn, setYarn, getYarn, updateYarn }) {

    const id = useParams().id
    const navigate = useNavigate()

useEffect(() => {
    getYarn(id)
}, [])

const [brand, setBrand] = useState(yarn?.brand)
const [colorName, setColorName] = useState(yarn?.colorName)
const [colorCode, setColorCode] = useState(yarn?.colorCode)
const [yardage, setYardage] = useState(yarn?.yardage)
const [grams, setGrams] = useState(yarn?.grams)
const [description, setDescription] = useState(yarn?.description)

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


        <Link to={`/stash/yarn/${id}`}><button>Cancel</button></Link>
        
        </div>
    
    
    
    </div>
  )
}

export default StashEdit