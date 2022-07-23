import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import './Library.css'
import {Link} from 'react-router-dom'
import '../components/SmallSockImage.css'
import SmallSockImage from '../components/SmallSockImage'
import SockDetail from './SockDetail'

function Library({getDesigns, designs, setDesigns, revDesigns}) {

  const [isActive, setIsActive] = useState('all')

  useEffect(() => {
    getDesigns()
  }, [])
  

  return (
    
    <div >
        
        <Header />

        <div className='main'>
<br/>
        <div style={{display:'flex', justifyContent:'space-between', width:'60vw', marginBottom:'-20px'}}>
          <div style={{cursor:'pointer'}} onClick={() => setIsActive('all')}><h2>All</h2></div>
          <div style={{cursor:'pointer'}} onClick={() => setIsActive('inprog')}><h2>In Progress</h2></div>
          <div style={{cursor:'pointer'}} onClick={() => setIsActive('sss')}><h2>Single Sock Syndrome</h2></div>
          <div style={{cursor:'pointer'}} onClick={() => setIsActive('comp')}><h2>Completed</h2></div>
          </div>

        { isActive === 'all' &&
        
        <div className='card-cont'>
        
        {designs?.map((design) => 
            <div key={design.id} className='design-card'>

            <Link to={`/design-library/socks/${design.id}`} key={design.id} >

            
            <SmallSockImage rib={design.ribColor} ankle={design.ankleColor} heel={design.heelColor} foot={design.footColor} toe={design.toeColor}/>
            <h1 style={{margin:'5px'}}>{design.name}</h1>
            <h4 style={{margin:'5px'}}>{design.knitStatus}</h4>
            </Link>
            
            </div>
        )}


        </div> }

        { isActive === 'inprog' &&
        
        <div className='card-cont'>
        
        {designs?.map((design) => {
          console.log(design.knitStatus)

              if (design?.knitStatus === 'In Progress') {
            <div key={design.id} className='design-card'>

            <Link to={`/design-library/socks/${design.id}`} key={design.id} >

            
            <SmallSockImage rib={design.ribColor} ankle={design.ankleColor} heel={design.heelColor} foot={design.footColor} toe={design.toeColor}/>
            <h1 style={{margin:'5px'}}>{design.name}</h1>
            <h4 style={{margin:'5px'}}>{design.knitStatus}</h4>
            </Link>
            
            </div>
              } } ) }


        </div> }


        { isActive === 'sss' &&
        
        <div className='card-cont'>
        
        {designs?.map((design) => {
console.log(design.knitStatus)
              if (design?.knitStatus === 'Single Sock Syndrome') {
            <div key={design.id} className='design-card'>

            <Link to={`/design-library/socks/${design.id}`} key={design.id} >

            
            <SmallSockImage rib={design.ribColor} ankle={design.ankleColor} heel={design.heelColor} foot={design.footColor} toe={design.toeColor}/>
            <h1 style={{margin:'5px'}}>{design.name}</h1>
            <h4 style={{margin:'5px'}}>{design.knitStatus}</h4>
            </Link>
            
            </div>
              } } ) }


        </div> }

        { isActive === 'comp' &&
        
        <div className='card-cont'>
        
        {designs?.map((design) => {

              if (design?.knitStatus === 'Completed') {
            <div key={design.id} className='design-card'>

            <Link to={`/design-library/socks/${design.id}`} key={design.id} >

            
            <SmallSockImage rib={design.ribColor} ankle={design.ankleColor} heel={design.heelColor} foot={design.footColor} toe={design.toeColor}/>
            <h1 style={{margin:'5px'}}>{design.name}</h1>
            <h4 style={{margin:'5px'}}>{design.knitStatus}</h4>
            </Link>
            
            </div>
              } } ) }


        </div> }

    


        {/* <div className='card-cont'>
        
        {designs?.map((design) => 
            <div key={design.id} className='design-card'>

            <Link to={`/design-library/socks/${design.id}`} key={design.id} >

            
            <SmallSockImage rib={design.ribColor} ankle={design.ankleColor} heel={design.heelColor} foot={design.footColor} toe={design.toeColor}/>
            <h1 style={{margin:'5px'}}>{design.name}</h1>
            <h4 style={{margin:'5px'}}>{design.knitStatus}</h4>
            </Link>
            
            </div>
        )}


        </div> */}
        <br/><br/><br/><br/>
        </div>
    </div>
  )
}

export default Library