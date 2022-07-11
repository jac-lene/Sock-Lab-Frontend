import React, { useState } from 'react'
import './DesignPage.css'
import Header from '../components/Header'
import ColorPicker from '../components/ColorPicker'
import { SwatchesPicker } from 'react-color'
import SockImage from '../components/SockImage'
import CreateForm from '../components/CreateForm'
import '../components/SockImage.css'
import WholeSock from '../components/sockshapes/Wholesock'
import AnkleS from '../components/sockshapes/Ankleshape'
import FootS from '../components/sockshapes/Footshape'
import HeelS from '../components/sockshapes/Heelshape'
import ToeS from '../components/sockshapes/Toeshape'
import RibS from '../components/sockshapes/Ribshape'

function DesignPage({url}) {
  
  const [color, setColor] = useState('#fff')

  // FORM STUFF

  const [name, setName] = useState('');
  const [ankle_height, setAnkle] = useState('crew');
  const [CC1, setCC1] = useState('');
  const [CC2, setCC2] = useState('');
  const [CC3, setCC3] = useState('');
  const [size, setSize] = useState('');
  const [rib, setRib] = useState('');
  const [heel, setHeel] = useState('');
  const [toe, setToe] = useState('');
  const [completed, setCompleted] = useState('no');
  const [inProg, setInProg] = useState('');

  const [toeColor, setToeColor] = useState('#fff')
  const [ankleColor, setAnkleColor] = useState('#fff')
  const [heelColor, setHeelColor] = useState('#fff')
  const [footColor, setFootColor] = useState('#fff')
  const [ribColor, setRibColor] = useState('#fff')
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const newDesign = {
          toeColor, ankleColor, heelColor, footColor, ribColor
      };

     fetch("http://localhost:8000/socks/", {
              method: "post",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(newDesign),
          }).then(() => {
              console.log('new design', newDesign)
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

  //END color picker stuff


  return (
        <div>
            <Header />
            <div className="main">
        
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

            <div className='page-cont'>

                    <WholeSock />
                    <RibS onClick={() => getColor('rib')} style={{fill: ribColor}}/>
                    <AnkleS onClick={() => getColor('ankle')} style={{fill: ankleColor}}/>
                    <FootS onClick={() => getColor('foot')} style={{fill: footColor}}/>
                    <HeelS onClick={() => getColor('heel')} style={{fill: heelColor}}/>
                    <ToeS onClick={() => getColor('toe')} style={{fill: toeColor}}/>

            </div>
          
                  <div className='color-picker'>
                      <br/><br/>
                      <SwatchesPicker width={1000} height={160} color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>
                      <h2>You picked {color}</h2>  
                  </div>
        </div>

            
        </div>
  )
}

export default DesignPage