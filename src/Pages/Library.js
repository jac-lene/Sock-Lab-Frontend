import React, { useEffect } from 'react'
import Header from '../components/Header'
import './Library.css'
import {Link} from 'react-router-dom'
import SmallSockImage from '../components/SmallSockImage'
import SockImage from '../components/SockImage'

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
        {/* <SmallSockImage style={{width:'200px'}}/> */}
        {designs?.map((design) => 
            <div key={design.id} className='design-card'>

            <Link to={`/design-library/socks/${design.id}`} key={design.id}>

            <img src={design.user_photo} alt={`design${design.id}`} width='200px' />
            <h1>{design.name}</h1>
            </Link>
            
            </div>
        )}

        </div>
       
        </div>
    </div>
  )
}

export default Library