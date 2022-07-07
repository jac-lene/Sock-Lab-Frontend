import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


function Header({header, headerChange}) {

    console.log(header)

    // useEffect(() => {
    //     headerChange()
    // }, [])
    

  return (
    <div>

<header className="App-header">
        <Link to='/'><h1 className='site-title'>sock lab</h1></Link>
        <Link to='/the-lab'><h2>design</h2></Link>
        <h2>library</h2>
        <h2>map</h2>
      </header>

    </div>
  )
}

export default Header