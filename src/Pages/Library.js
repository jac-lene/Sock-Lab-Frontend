import React, { useEffect } from 'react'
import Header from '../components/Header'
import './Library.css'
import {Link} from 'react-router-dom'

function Library({getDesigns, designs}) {
if (!designs) {
    console.log('loading')
}
    console.log(designs)

  useEffect(() => {
    getDesigns()
  }, [])


  return (
    
    <div>
        
        <Header />
        <div className='main'>
        <div className='card-cont'>

        {designs?.map((design) => 
            <div key={design.id} className='design-card'>
            <a href={design.sock_url}>
            <img src={design.user_photo} alt={`design${design.id}`} width='200px'/>
            <h1>{design.name}</h1>
            </a>
            </div>
        )}

        </div>
       
        </div>
    </div>
  )
}

export default Library