import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function StashView({ url, stash, setStash, getStash }) {

useEffect(() => {
  getStash()
}, [stash])



  return (
    <div>
        <Header />
        <div className='main'>
        <h1>StashView</h1>
        <Link to='/stash/yarn/add'><button>Add</button></Link>
        <div className='card-cont'>
        
        {stash?.map((yarn) => 

    <Link to={`/stash/yarn/${yarn.id}`} key={yarn.id} >
            <div key={yarn.id} className='design-card'>

           

            
           <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
           
           <h1 style={{marginTop:'0px', marginBottom:'30px'}}>{yarn.brand}</h1>

            <div style={{width:'100px', height:'100px', border:"2px solid black", backgroundColor:yarn?.colorCode}}></div>
            
            </div>
            </div>
            </Link>
        )}

        </div>
       
        <br/><br/><br/><br/>     
        </div>

           
        </div>
        
  )
}

export default StashView