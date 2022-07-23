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

import Check from './images/icons/check.png'
import Cancel from './images/icons/close.png'
import Draw from './images/icons/draw.png'

function SockDetail({ url, getDesigns, deleteDesign, getOne, sock, setSock, setDesigns, designs }) {



  const navigate = useNavigate()
  if(!sock) {
    console.log('loading')
  } else {}

  console.log()

  const [knitStatus, setKnitStatus] = useState(sock?.knitStatus)
  const [name, setName] = useState(sock?.name)
  const [show, setShow] = useState(false)
  const [formShow, setFormShow] = useState(false)
  const [renameShow, setRenameShow] = useState(false)
 
  const id = useParams().id
  // console.log(id)

  useEffect(() => {

    const getOne = async (id) => {
      await fetch(url + id)
      .then((res) => res.json())
      .then((res) => {
        setName(res.name)
        setKnitStatus(res.knitStatus)
        setSock(res)
      })
      .catch(console.error);
    }

      getOne(id)
      
      console.log(sock)
      console.log(name)
  }, [])


const handleSubmit = (e) => {
    e.preventDefault()
    const updatedDesign = {
      name, knitStatus
  };

 fetch(url + id, {
          method: "put",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedDesign),
      }).then(() => {
          console.log('updated design', updatedDesign)
          navigate(`/design-library/socks/${id}`)
          getOne(id)
          getDesigns()
          setDesigns(designs)
          if (formShow) {
            setFormShow(false)
          }
          if (renameShow) {
            setRenameShow(false)
          }
      })
}


  return (
      <div >
        <Header/>
      <div className='main'>
      <div className='sockpatt'>
      
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', gap:'50px', width:'60vw'}}>
      <div className='custButt knitStatus' style={{backgroundColor:'orange'}} onClick={() => deleteDesign(id)}>DELETE</div>
     
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'5px'}}>

      <h2 style={{marginBottom:'0', fontSize:'30px'}}>{sock?.name}</h2> 
      <h4 style={{marginTop:'0', fontSize:'20px'}}>{sock?.knitStatus}</h4>

      </div>

      <Link to={`/design-library/socks/${id}/edit`}><div className='custButt knitStatus' style={{backgroundColor:'orange'}}>EDIT</div></Link>
    
      </div>
      <form onSubmit={handleSubmit} className='statForm'>
      
      <div className='designbuttons' >
      
      {formShow === false ?
      <div className='knitStatus custButt' onClick={() => setFormShow(prev => !prev)}>KNIT STATUS</div>
      : <div className='knitStatus custButt' onClick={handleSubmit}>SAVE STATUS</div>}

      <div className='showPatt custButt' onClick={() => setShow(prev => !prev)}>{!show ? 'SHOW PATTERN' : 'HIDE PATTERN'}</div>

      </div>

     

    {formShow === true ?  
      <div>
      <br/>
      <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
          <label>Knit Status:</label>
          <select value={knitStatus} onChange={(e)=> {setKnitStatus(e.target.value)}}>
            <option value=''>Be honest...</option>
            <option value='In Progress'>In Progress</option>
            <option value='Single Sock Syndrome'>Single Sock Syndrome</option>
            <option value='Completed'>Completed</option>
          </select>
        </div>
        </div>
      
        
     : null}
      </form> 


      { !show ? <div className='page-cont'>
      <WholeSock />
      <RibS style={{fill: sock?.ribColor}}/>
      <AnkleS style={{fill: sock?.ankleColor}}/>
      <FootS  style={{fill: sock?.footColor}}/>
      <HeelS style={{fill: sock?.heelColor}}/>
      <ToeS style={{fill: sock?.toeColor}}/>
      </div>
      : 
      <div className='patternmodal'>
      <SockPattern sock={sock} setShow={setShow} show={show} /></div> 
      }
  
      
      </div>
      </div>
     </div>
    );
}

export default SockDetail