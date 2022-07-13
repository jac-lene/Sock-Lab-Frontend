import React, { useEffect } from 'react'
import Header from '../components/Header'
import './Library.css'
import {Link} from 'react-router-dom'
import '../components/SmallSockImage.css'
import SmallSockImage from '../components/SmallSockImage'

function Library({getDesigns, designs}) {
if (!designs) {
    console.log('loading')
}
    console.log(designs)

  useEffect(() => {
    getDesigns()
  }, [])

  const revDesigns = designs.reverse()

  return (
    
    <div>
        
        <Header />
        <div className='main'>
        <div className='card-cont'>
        
        {revDesigns?.map((design) => 
            <div key={design.id} className='design-card'>

            <Link to={`/design-library/socks/${design.id}`} key={design.id}>

            
            <SmallSockImage rib={design.ribColor} ankle={design.ankleColor} heel={design.heelColor} foot={design.footColor} toe={design.toeColor}/>
            <h1>{design.name}</h1>
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