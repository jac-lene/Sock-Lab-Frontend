import React from 'react';
import { Link } from "react-router-dom";


function Header({ saving, savePrompt }) {

  return (
    <div>

<header className="App-header">
        
        <Link to='/'><h1 className='site-title'>sock lab</h1></Link>
        <Link to='/the-lab' ><h2>design</h2></Link>
        <Link to={saving ? '/the-lab' : '/design-library'}><h2>library</h2></Link>
        <h2>stash</h2>
</header>
      <div className='dash-divider'></div>
    </div>
  )
}

export default Header