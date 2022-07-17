import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './DesignPage.css'
import Header from '../components/Header'
import { SwatchesPicker, GithubPicker } from 'react-color'
import '../components/SockImage.css'
import WholeSock from '../components/sockshapes/Wholesock'
import AnkleS from '../components/sockshapes/Ankleshape'
import FootS from '../components/sockshapes/Footshape'
import HeelS from '../components/sockshapes/Heelshape'
import ToeS from '../components/sockshapes/Toeshape'
import RibS from '../components/sockshapes/Ribshape'
import SockPattern from '../components/SockPattern'
import { getNodeText } from '@testing-library/react'




function DesignPage({url, designs, setDesigns, randomColors}) {

  const navigate = useNavigate();

  const [swatches, setSwatches] = useState([]);
  
  const [color, setColor] = useState('#fff');

  const [show, setShow] = useState(true);
  const [saveShow, setSaveShow] = useState(false);

  // FORM STUFF

  const [name, setName] = useState('My Sock Design');

  const [toeColor, setToeColor] = useState('#fff')
  const [ankleColor, setAnkleColor] = useState('#fff')
  const [heelColor, setHeelColor] = useState('#fff')
  const [footColor, setFootColor] = useState('#fff')
  const [ribColor, setRibColor] = useState('#fff')
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const newDesign = {
         name, toeColor, ankleColor, heelColor, footColor, ribColor
      };

     fetch(url, {
              method: "post",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(newDesign),
          }).then(() => {
              console.log('new design', newDesign)
              setDesigns([...designs], newDesign)
              navigate('/design-library')
          })

  }

  //END FORM STUFF

  //color picker stuff

  const getColor = (x) => {
    if (x === 'rib') {
      setRibColor(color);
    } else if (x === 'ankle') {
      setAnkleColor(color)
    } else if (x === 'foot') {
      setFootColor(color)
    } else if (x === 'heel') {
      setHeelColor(color)
    } else if (x === 'toe') {
      setToeColor(color)
    }
  }

  const clearColor = () => {
      setRibColor('#fff');
      setAnkleColor('#fff')
      setFootColor('#fff')
      setHeelColor('#fff')
      setToeColor('#fff')
  }

  const addSwatch = () => {
    setSwatches([...swatches, color])
  }

  const chaosMode = () => {
    setRibColor(randomColors())
    setAnkleColor(randomColors())
    setHeelColor(randomColors())
    setFootColor(randomColors())
    setToeColor(randomColors())
  }

  // useEffect(() => {
  //   addSwatch()
  // }, [color])

  useEffect(() => {
  
  }, [])

  //END color picker stuff

  return (
        <div>
            <div><Header/></div>
            <div className="main">

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

       {saveShow === true ?  
       <div className='create'>
            
            <div>
            
            <label className='name'>Name your design: </label>
            <input
                className='name'
                type='text' 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            
            <button className='save' >REAL Save Design</button>
            <button className='save' onClick={() => setSaveShow(prev => !prev)}>Cancel</button> 
        </div>
            : <div>
              <button className='save' onClick={() => setSaveShow(prev => !prev)}>FAKE Save Design</button> 
              </div>}
            </form>

            <button onClick={clearColor}>Clear 
          Colors</button>

            </div>
            
        <div className='chaosButton' onClick={() => chaosMode()}><div style={{width:'60px'}}>CHAOS MODE</div></div>


        <div className='sockpatt'>

            <div className='page-cont'>
                    <WholeSock />
                    <RibS onClick={() => getColor('rib')} style={{fill: ribColor}}/>
                    <AnkleS onClick={() => getColor('ankle')} style={{fill: ankleColor}}/>
                    <FootS onClick={() => getColor('foot')} style={{fill: footColor}}/>
                    <HeelS onClick={() => getColor('heel')} style={{fill: heelColor}}/>
                    <ToeS onClick={() => getColor('toe')} style={{fill: toeColor}}/>

            </div>
            
            <div className='color-picker'>
                      {/* <div>
                      <GithubPicker className='swatches' colors={swatches} height={75} onChange={updatedColor => setColor(updatedColor.hex)}/></div><br/> */}
                      <SwatchesPicker 
                      width={1000} height={160} color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>
                      {/* <h2>You picked {color}</h2>   */}
            </div>
  
            </div>
          
            <div style={{height:'100px'}}></div>   
        </div>

            
        </div>
  )
}

export default DesignPage