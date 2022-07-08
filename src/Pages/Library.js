import React from 'react'
import Header from '../components/Header'
import './Library.css'

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
            </>
        )}
        Library
        
    </div>
  )
}

export default Library