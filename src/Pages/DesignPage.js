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




function DesignPage({ url, designs, setDesigns, randomColors, stash, getStash }) {

  const navigate = useNavigate();

  
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


  useEffect(() => {
  getStash()
  }, [])

  const mycolors = []

  
  stash?.map((mycolor) => {
     mycolors.push([mycolor.colorCode]) 
  })

  console.log(mycolors)

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


  const chaosMode = () => {
    setRibColor(randomColors())
    setAnkleColor(randomColors())
    setHeelColor(randomColors())
    setFootColor(randomColors())
    setToeColor(randomColors())
  }


  //END color picker stuff

  return (
        <div>
            <div><Header/></div>
            <div className="main">

            <div className='designbuttons'>

          <form className='create' >
            
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
            <br/><br/>
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
            <div className='custButt saveButt' onClick={handleSubmit}>SAVE</div>
            <div className='custButt clearButt' onClick={() => setSaveShow(prev => !prev)}>CANCEL</div>
        </div>
            : 
            <div>

          <br/>
            <div  className='designbuttons'>
              <div className='custButt saveButt' onClick={() => setSaveShow(prev => !prev)}>SAVE</div>
              <div className='custButt clearButt' onClick={clearColor}>CLEAR</div>
              </div>
            </div>
           
              }

            </form>

            </div>
            
        <div className='chaosButton' onClick={() => chaosMode()}><div style={{}}><p className='chaosText'>CHAOS <br/> MODE</p></div></div>


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
                      <div>
                      {/* <GithubPicker className='swatches' colors={mycolors} height={75} onChange={updatedColor => setColor(updatedColor.hex)}/> */}
                      </div>
                      <br/>
                      
                      <h2>Stash Colors</h2>
                      <SwatchesPicker 
                      width={1000} height={55} color={color} colors={mycolors} onChange={updatedColor => setColor(updatedColor.hex)}/>
                     
                    
                      <br/>
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