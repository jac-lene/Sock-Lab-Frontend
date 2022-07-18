import React from 'react';
import { Link } from "react-router-dom";


function Header({  }) {

  return (
    <div>

<header className="App-header">
        
        <Link to='/'><h1 className='site-title' style={{position:'relative', bottom:'17px'}}>SOCK LAB</h1></Link>
        <Link to='/the-lab' ><h2 style={{position:'relative', bottom:'38px'}}>DESIGN</h2></Link>
        <Link to='/design-library'><h2 style={{position:'relative', bottom:'13px'}}>LIBRARY</h2></Link>
        <Link to='/stash'><h2 style={{position:'relative', bottom:'30px'}}>STASH</h2></Link>
        <Link to='/how-to'><h2 style={{position:'relative', bottom:'20px'}}>?</h2></Link>
</header>


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