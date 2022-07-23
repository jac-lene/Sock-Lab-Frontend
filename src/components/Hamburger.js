import React from 'react'
import {Link} from 'react-router-dom'

function Hamburger() {
  return (
    <div style={{display:'flex', flexDirection:'column', position:'absolute', width:'340px', zIndex:'999', top:'70px', backgroundColor: 'orange', paddingBottom:'40px', border:"2px solid black"}}> 
        <Link to='/the-lab' ><h2 style={{position:'relative', bottom:'10px', right:'30px'}}>DESIGN</h2></Link>
        <Link to='/design-library'><h2 style={{position:'relative', bottom:'0px', left:'50px'}}>LIBRARY</h2></Link>
        <Link to='/stash'><h2 style={{position:'relative', bottom:'0px', right:'70px'}}>STASH</h2></Link>
        
        </div> 
  )
}

export default Hamburger