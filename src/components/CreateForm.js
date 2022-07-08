import React, { useState } from 'react'

function CreateForm({url}) {
    const [name, setName] = useState('');
    const [ankle_height, setAnkle] = useState('crew');
    const [CC1, setCC1] = useState('');
    const [CC2, setCC2] = useState('');
    const [CC3, setCC3] = useState('');
    const [size, setSize] = useState('');
    const [rib, setRib] = useState('');
    const [heel, setHeel] = useState('');
    const [toe, setToe] = useState('');
    const [completed, setCompleted] = useState('no');
    const [inProg, setInProg] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newDesign = {
            name, ankle_height, completed
        };

       fetch("http://localhost:8000/socks/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newDesign),
            }).then(() => {
                console.log('new design', newDesign)
            })

    }


  return (
    <div>
        
        <form className='create' onSubmit={handleSubmit}>
            
            <label>Design Name</label>
            <input
                type='text' 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Sock Style</label>
            <select
            value={ankle_height}
            onChange={(e) => setAnkle(e.target.value)}>
                <option value='crew'>crew</option>
                <option value='calf'>calf</option>
            </select>

            <label>CC1</label>
            <input
                type='text' 
                required
                value={CC1}
                onChange={(e) => setCC1(e.target.value)}
            />

            <label>Completed?</label>
            <select
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}>
                <option value='yes'>yes</option>
                <option value='no'>no</option>
            </select>
            <button>Save Design</button>
            <p>{name}</p>
        </form>
        
    </div>
  )
}

export default CreateForm