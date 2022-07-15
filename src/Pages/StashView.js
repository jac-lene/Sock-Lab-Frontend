import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function StashView({ url, stash, setStash, getStash }) {

useEffect(() => {
  getStash()
}, [])



  return (
    <div>
        <Header />
        <div className='main'>
        <h1>StashView</h1>
        <Link to='/stash/yarn/add'><button>Add</button></Link>
        <div className='card-cont'>
        
        {stash?.map((yarn) => 
            <div key={yarn.id} className='design-card'>

            <Link to={`/stash/yarn/${yarn.id}`} key={yarn.id} >

            
           
            <h1>{yarn.brand}</h1>
            <h4>{yarn.colorName}</h4>
            </Link>
            
            </div>
        )}

        </div>
        <div style={{height:'200px'}}></div>
        </div>

        
        </div>
        
  )
}

export default StashView