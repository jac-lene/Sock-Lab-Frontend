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




function UpdateDesign({url, getDesigns, getOne, sock, deleteDesign }) {

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
          toeColor, ankleColor, heelColor, footColor, ribColor
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


  return (
        <div>
            <Header />
            <div className="main">
                <h2>Edit {sock?.name}</h2>
        <div className='designbuttons'>
          <form className='create' onSubmit={handleSubmit}>
            
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

          </form>
        <button onClick={clearColor}>Clear Colors</button>
        <button onClick={() => setShow(prev => !prev)}>{show === false ? 'Show Pattern Preview' : 'Hide Pattern Preview'}</button>
        <button onClick={() => deleteDesign(id)}>Delete</button>
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