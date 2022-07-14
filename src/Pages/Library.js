import React, { useEffect } from 'react'
import Header from '../components/Header'
import './Library.css'
import {Link} from 'react-router-dom'
import '../components/SmallSockImage.css'
import SmallSockImage from '../components/SmallSockImage'

function Library({getDesigns, designs, setDesigns, revDesigns}) {

    

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

            <Link to={`/design-library/socks/${design.id}`} key={design.id}>

            
            <SmallSockImage rib={design.ribColor} ankle={design.ankleColor} heel={design.heelColor} foot={design.footColor} toe={design.toeColor}/>
            <h1>{design.name}</h1>
            <h4>{design.knitStatus}</h4>
            </Link>
            
            </div>
        )}

        </div>
        <div style={{height:'200px'}}></div>
        </div>
    </div>
  )
}

export default Library