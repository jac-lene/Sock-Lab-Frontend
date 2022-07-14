import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import WholeSock from '../components/sockshapes/Wholesock'
import AnkleS from '../components/sockshapes/Ankleshape'
import FootS from '../components/sockshapes/Footshape'
import HeelS from '../components/sockshapes/Heelshape'
import ToeS from '../components/sockshapes/Toeshape'
import RibS from '../components/sockshapes/Ribshape'
import Header from '../components/Header'
import SockPattern from '../components/SockPattern'

function SockDetail({ url, deleteDesign, getOne, sock }) {

  const [knitStatus, setKnitStatus] = useState(false);
  const [show, setShow] = useState(true);
 
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



  // console.log(sock.ankleColor, sock.ribColor, sock.footColor)

  return (
      <div >
        <Header/>
      <div className='main'>
      <div className='sockpatt'>
      

      
      <h2>{sock?.name}</h2>
      <div className='designbuttons' ><br/>
      <Link to={`/design-library/socks/${id}/edit`}><button>Edit Design</button></Link>
      <button onClick={() => setShow(prev => !prev)}>{show === false ? 'Show Pattern Preview' : 'Hide Pattern Preview'}</button>
      </div>
      <div className='page-cont'>
      <WholeSock />
      <RibS style={{fill: sock?.ribColor}}/>
      <AnkleS style={{fill: sock?.ankleColor}}/>
      <FootS  style={{fill: sock?.footColor}}/>
      <HeelS style={{fill: sock?.heelColor}}/>
      <ToeS style={{fill: sock?.toeColor}}/>
      </div>
      <div style={{height: '200px'}}></div>
      </div>
     
      {show && <div className='patternmodal'><SockPattern sock={sock} setShow={setShow} show={show} /></div>}
      </div>
     </div>
    );
}

export default SockDetail