import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'

function StashDetail({ url, stash, setStash, getStash, yarn, setYarn, getYarn, deleteYarn }) {

    const id = useParams().id

    useEffect(() => {
        getYarn(id)
    }, [])

if (!yarn) {
    console.log('Loading')
}


  return (
    <div>
        <Header/>
        <div className='main'>
            
            <h1>Stash Detail</h1>
            <Link to={`/stash/yarn/${id}/edit`}><button>Edit</button></Link>
            <button onClick={() => deleteYarn(id)}>Delete</button>
            <h3>{yarn?.brand}</h3>
            <div style={{width:'50px', height:'50px', border:"2px solid black", backgroundColor:yarn?.colorCode}}></div>
            <h3>{yarn?.colorName}</h3>
            <h3>{yarn?.yardage} yards / {yarn?.grams} grams</h3>
            <h3>{yarn?.description}</h3>

            </div>
        
        
        
        </div>
  )
}

export default StashDetail