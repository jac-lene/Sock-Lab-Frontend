import React from 'react'
import Header from '../components/Header'
import './Library.css'
import {Link} from 'react-router-dom'

function Library({designs}) {
if (!designs) {
    console.log('loading')
}
    console.log(designs)

  return (
    
    <div>
        
        <Header/>
        {designs.map((design) => 
            <>
            <h1>{design.name}</h1>
            <h3>{design.CC1}</h3>
            <a href={design.sock_url}>Details</a>
            </>
        )}
        
    </div>
  )
}

export default Library