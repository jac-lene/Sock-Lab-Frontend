import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


function Header() {

    

  return (
    <div>

<header className="App-header">
        <Link to='/'><h1 className='site-title'>sock lab</h1></Link>
        <Link to='/the-lab'><h2>design</h2></Link>
        <Link to='/design-library'><h2>library</h2></Link>
        <h2>map</h2>
</header>
      <div className='dash-divider'></div>
    </div>
  )
}

export default Header