import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './DesignPage.css'
import Header from '../components/Header'
import ColorPicker from '../components/ColorPicker'
import { SwatchesPicker, GithubPicker } from 'react-color'
import SockImage from '../components/SockImage'
import CreateForm from '../components/CreateForm'
import '../components/SockImage.css'
import WholeSock from '../components/sockshapes/Wholesock'
import AnkleS from '../components/sockshapes/Ankleshape'
import FootS from '../components/sockshapes/Footshape'
import HeelS from '../components/sockshapes/Heelshape'
import ToeS from '../components/sockshapes/Toeshape'
import RibS from '../components/sockshapes/Ribshape'
import SockPattern from '../components/SockPattern'
import DesignPage from './DesignPage'

import Check from './images/icons/check.png'
import Cancel from './images/icons/close.png'
import Draw from './images/icons/draw.png'



function UpdateDesign({url, getDesigns, getOne, sock, setSock, deleteDesign }) {

  const navigate = useNavigate()

  const id = useParams().id


  useEffect(() => {
    getOne(id)
}, [])

console.log(sock)
  
  const [newColor, setNewColor] = useState('#fff')

  const [show, setShow] = useState(false);

  // FORM STUFF

  const [name, setName] = useState('');
  const [completed, setCompleted] = useState('no');
  const [inProg, setInProg] = useState('');
  const [renameShow, setRenameShow] = useState(false)
  const [knitStatus, setKnitStatus] = useState(sock?.knitStatus)

  const [toeColor, setToeColor] = useState(sock?.toeColor)
  const [ankleColor, setAnkleColor] = useState(sock?.ankleColor)
  const [heelColor, setHeelColor] = useState(sock?.heelColor)
  const [footColor, setFootColor] = useState(sock?.footColor)
  const [ribColor, setRibColor] = useState(sock?.ribColor)

  const [swatches, setSwatches] = useState([])

  const addSwatch = () => {
    setSwatches([...swatches, newColor])
  }

  useEffect(() => {
    addSwatch()
  }, [newColor])
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const updatedDesign = {
          name, toeColor, ankleColor, heelColor, footColor, ribColor
      };

     fetch(url+id, {
              method: "put",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedDesign),
          }).then(() => {
              console.log('updated design', updatedDesign)
              getDesigns()
              getOne(id)
              navigate(`/design-library/socks/${id}`)
          })

  }

  //END FORM STUFF

  //color picker stuff

  const getColor = (x) => {
    if (x === 'rib') {
      setRibColor(newColor);
    } else if (x === 'ankle') {
      setAnkleColor(newColor)
    } else if (x === 'foot') {
      setFootColor(newColor)
    } else if (x === 'heel') {
      setHeelColor(newColor)
    } else if (x === 'toe') {
      setToeColor(newColor)
    }
  }

//   const setColor = () => {
//     setRibColor();
//     setAnkleColor('#fff')
//     setFootColor('#fff')
//     setHeelColor('#fff')
//     setToeColor('#fff')
// }

  const clearColor = () => {
      setRibColor('#fff');
      setAnkleColor('#fff')
      setFootColor('#fff')
      setHeelColor('#fff')
      setToeColor('#fff')
  }

  //END color picker stuff

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


  return (
        <div>
            <Header />
            <div className="main">


                {/* <h2>Edit {sock?.name}</h2> */}



        <div className='designbuttons'>




          <form className='create' onSubmit={handleSubmit}>

<div>
{renameShow === true ? <div>
        <br/>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'10px'}}>
        
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'10px'}}>
          <input 
          type='text'
          value={name} 
          onChange={(e)=> {setName(e.target.value)}} style={{fontSize:'23px', fontWeight:'bold', width:'180px', textAlign:'center'}}></input>
          
          {/* <button type='submit'>Save</button> */}
          
          <img src={Check} onClick={handleSubmit} alt='save' style={{width:'25px'}}/>
          <img src={Cancel} alt='cancel' style={{width:'20px'}} onClick={() => setRenameShow(false)}/></div>
          <h4 style={{marginTop:'0px'}}>{sock?.knitStatus}</h4>
        </div>

        
        </div>
      
      
      : 
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'10px'}}>
        <h2 style={{marginBottom:'0px'}}>{sock?.name}</h2> 
      {/* <button onClick={() => setRenameShow(true)}>Rename</button> */}
      <img src={Draw} alt='edit' style={{width:'20px', marginBottom:'-20px'}} onClick={() => setRenameShow(true)}/>
      </div>
      <h4 style={{marginTop:'0px'}}>{sock?.knitStatus}</h4>
      </div>}
      </div>

<div>
            <label className='invisible'>Rib</label>
            <input
                className='invisible'
                type='text' 
                required
                value={ribColor}
                onChange={(e) => setRibColor(e.target.value)}
            />
            
            <label className='invisible'>Ankle</label>
            <input
                className='invisible'
                type='text' 
                required
                value={ankleColor}
                onChange={(e) => setAnkleColor(e.target.value)}
            />
            
            <label className='invisible'>Foot</label>
            <input
                className='invisible'
                type='text' 
                required
                value={footColor}
                onChange={(e) => setFootColor(e.target.value)}
            />
            
            <label className='invisible'>Heel</label>
            <input
                className='invisible'
                type='text' 
                required
                value={heelColor}
                onChange={(e) => setHeelColor(e.target.value)}
            />
            
            <label className='invisible'>Toe</label>
            <input
                className='invisible'
                type='text' 
                required
                value={toeColor}
                onChange={(e) => setToeColor(e.target.value)}
            />
       
            <button className='save'>Save Design</button>
            </div> 
          </form>
        <button onClick={clearColor}>Clear Colors</button>
        <button onClick={() => setShow(prev => !prev)}>{show === false ? 'Show Pattern Preview' : 'Hide Pattern Preview'}</button>
        <button onClick={() => navigate('/design-library')}>Cancel</button>
        </div>
          
            
        <div className='sockpatt'>
            <div className='page-cont'>
            <WholeSock />
            <RibS onClick={() => getColor('rib')} style={{fill: ribColor}}/>
            <AnkleS onClick={() => getColor('ankle')} style={{fill: ankleColor}}/>
            <FootS onClick={() => getColor('foot')} style={{fill: footColor}}/>
            <HeelS onClick={() => getColor('heel')} style={{fill: heelColor}}/>
            <ToeS onClick={() => getColor('toe')} style={{fill: toeColor}}/>

            </div>
            
  
            </div>
            {show && <div className='patternmodal'><SockPattern/></div>}
          
                  <div className='color-picker'>
                      {/* <br/><br/> */}
                      {/* <div>
                      <GithubPicker width={500} colors={swatches} height={75} onChange={updatedColor => setNewColor(updatedColor.hex)}/></div><br/> */}
                      <SwatchesPicker width={1000} height={160} color={newColor} onChange={updatedColor => setNewColor(updatedColor.hex)}/>
                      <h2>You picked {newColor}</h2>  
                  </div>
        </div>

            
        </div>
  )
}

export default UpdateDesign