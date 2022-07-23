import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Menu from '../Pages/images/icons/menu.png'
import Hamburger from './Hamburger';


function Header({ howShow, setHowShow  }) {

  const [isPhone, setIsPhone] = useState(false)
  const [show, setShow] = useState(false)

  console.log(window.screen.width)

  console.log(isPhone)

  const resize = () => {
    if (window.screen.width < 450) {
      setIsPhone(true)
    } else if (window.screen.width > 450) {
      setIsPhone(false)
    } 
  }

useEffect(() => {
  window.addEventListener("resize", resize)
})

  return (
    <div>

{ isPhone ? 

<header className="App-header">
        <Link to='/'><h1 style={{position:'relative', bottom:'30px', right:'10px'}}>SOCK LAB</h1></Link>
        <Link to='/how-to'><h2 style={{width:'30px', position:'relative', bottom:'31px'}}>?</h2></Link>
        <img src={Menu} alt='menu-hamburger' style={{width:'30px', position:'relative', bottom:'15px'}} onClick={() => setShow(prev => !prev)} />
{!show ?   

<Hamburger/>
        
: null}
      
</header>
: 
<header className="App-header">
        
        <Link to='/'><h1 className='site-title' style={{position:'relative', bottom:'17px'}}>SOCK LAB</h1></Link>
        <Link to='/the-lab' ><h2 style={{position:'relative', bottom:'38px'}}>DESIGN</h2></Link>
        <Link to='/design-library'><h2 style={{position:'relative', bottom:'13px'}}>LIBRARY</h2></Link>
        <Link to='/stash'><h2 style={{position:'relative', bottom:'30px'}}>STASH</h2></Link>
        <h2 style={{position:'relative', bottom:'20px'}} onClick={() => setHowShow(prev => !prev)}>?</h2>
</header>
}


{/* <header className="App-header" style={{justifyContent:'space-between'}}>
        
        <div style={{width:'500px'}}>
          <Link to='/'><h1 className='site-title' style={{position:'relative', top:'10px', justifyContent:'space-between'}}>SOCK LAB</h1></Link>
        </div>

        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'600px', marginRight:'20px'}}>
        <div><Link to='/design-library'><h2 style={{position:'relative', top:'10px'}}>LOGIN</h2></Link></div>
        <div><Link to='/stash'><h2 style={{position:'relative', bottom:'10px'}}>SIGNUP</h2></Link></div>
        <div><Link to='/how-to'><h2>?</h2></Link></div> 
        </div>
            
</header> */}


{/* <header className="App-header" style={{justifyContent:'space-between'}}>
        
        <div style={{width:'500px'}}><Link to='/'><h1 className='site-title' style={{position:'relative', top:'10px'}}>SOCK LAB</h1></Link></div>
        

        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'600px', marginRight:'20px'}}> <Link to='/the-lab' ><h2 style={{position:'relative', bottom:'15px'}}>CLEAR</h2></Link>
        <Link to='/design-library'><h2 style={{position:'relative', top:'10px'}}>SAVE</h2></Link>
        <Link to='/how-to'><h2>?</h2></Link></div>
       
</header> */}


      <div className='dash-divider'></div>
    </div>
  )
}

export default Header