import React from 'react';
import { Link } from "react-router-dom";


function Header({ saving, savePrompt }) {

  return (
    <div>

<header className="App-header">
        
        <Link to='/'><h1 className='site-title' style={{position:'relative', top:'10px'}}>SOCK LAB</h1></Link>
        <Link to='/the-lab' ><h2 style={{position:'relative', bottom:'15px'}}>DESIGN</h2></Link>
        <Link to={saving ? '/the-lab' : '/design-library'}><h2 style={{position:'relative', top:'10px'}}>LIBRARY</h2></Link>
        <Link to='/stash'><h2 style={{position:'relative', bottom:'10px'}}>STASH</h2></Link>
</header>
      <div className='dash-divider'></div>
    </div>
  )
}

export default Header