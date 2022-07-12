import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import WholeSock from '../components/sockshapes/Wholesock'
import AnkleS from '../components/sockshapes/Ankleshape'
import FootS from '../components/sockshapes/Footshape'
import HeelS from '../components/sockshapes/Heelshape'
import ToeS from '../components/sockshapes/Toeshape'
import RibS from '../components/sockshapes/Ribshape'
import Header from '../components/Header'

function SockDetail({ deleteDesign, getOne, sock }) {
 
  const id = useParams().id

  
  console.log(id)

  useEffect(() => {
      getOne(id)
  }, [])

  if (!sock) {
      return( 
      <>
      </>
      )
  }

  console.log(sock.ankleColor, sock.ribColor, sock.footColor)

  return (
      <div >
        <Header/>
      <div className='main'>
      <div className='page-cont'>
      <h2>{sock?.name}</h2>
      <div><br/>
      <button>Edit</button>
      <button onClick={() => deleteDesign(id)}>Delete</button></div>
      <WholeSock />
      <RibS style={{fill: sock?.ribColor}}/>
      <AnkleS style={{fill: sock?.ankleColor}}/>
      <FootS  style={{fill: sock?.footColor}}/>
      <HeelS style={{fill: sock?.heelColor}}/>
      <ToeS style={{fill: sock?.toeColor}}/>
      </div>
      
      </div>
     </div>
    );
}

export default SockDetail