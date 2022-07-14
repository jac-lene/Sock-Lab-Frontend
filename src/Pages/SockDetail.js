import React, {useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import WholeSock from '../components/sockshapes/Wholesock'
import AnkleS from '../components/sockshapes/Ankleshape'
import FootS from '../components/sockshapes/Footshape'
import HeelS from '../components/sockshapes/Heelshape'
import ToeS from '../components/sockshapes/Toeshape'
import RibS from '../components/sockshapes/Ribshape'
import Header from '../components/Header'
import SockPattern from '../components/SockPattern'

function SockDetail({ url, getDesigns, deleteDesign, getOne, sock, setDesigns, designs }) {


  const navigate = useNavigate()
  if(!sock) {
    console.log('loading')
  } else {}


  const [knitStatus, setKnitStatus] = useState(sock?.knitStatus);
  const [show, setShow] = useState(false);
  const [formShow, setFormShow] = useState(false);
 
  const id = useParams().id
  // console.log(id)

  useEffect(() => {
      getOne(id)
  }, [])

  useEffect(() => {
    // setDesigns(designs)
}, [])

const handleSubmit = (e) => {
    e.preventDefault()
    const updatedDesign = {
      knitStatus
  };

 fetch(url + id, {
          method: "put",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedDesign),
      }).then(() => {
          console.log('updated design', updatedDesign)
          setFormShow(prev => !prev)
          getOne(id)
          getDesigns()
          setDesigns(designs)
          navigate(`/design-library/socks/${id}`)
      })
}


  return (
      <div >
        <Header/>
      <div className='main'>
      <div className='sockpatt'>
      
      
     

      <div className='designbuttons' >
      <div> <h2>{sock?.name}</h2> <h4 style={{marginTop:'0'}}>{sock?.knitStatus}</h4></div>
        <br/>

      <button onClick={() => setFormShow(prev => !prev)}>KNIT STATUS</button>

      <Link to={`/design-library/socks/${id}/edit`}><button>Edit Design</button></Link>

      <button onClick={() => setShow(prev => !prev)}>Show Pattern</button>

      </div>

    {formShow === true ?  <form onSubmit={handleSubmit}>
        <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
          <label>Knit Status:</label>
          <select value={knitStatus} onChange={(e)=> {setKnitStatus(e.target.value)}}>
            <option value=''>Be honest...</option>
            <option value='In Progress'>In Progress</option>
            <option value='Single Sock Syndrome'>Single Sock Syndrome</option>
            <option value='Completed'>Completed</option>
          </select>
          <button type='submit'>Save</button>
        </div>
      </form> : null}
     


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
     
      {show && <div className='patternmodal'>
      <SockPattern sock={sock} setShow={setShow} show={show} />
      </div>}
      </div>
     </div>
    );
}

export default SockDetail