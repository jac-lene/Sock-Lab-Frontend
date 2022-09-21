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




function DesignPage({ url, designs, setDesigns, randomColors, stash, getStash, howShow, setHowShow }) {

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
            <div><Header howShow={howShow} setHowShow={setHowShow}/></div>
            <div className="main">


          { howShow ?   <div className='howto main'>
              <h1 className='exit' onClick={() => setHowShow(false)}>X</h1>

              <h2 className='click'>click a part of the sock to change color</h2>

              <h2 className='chaos'>press here to randomize</h2>

              <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>

              <h2 className='howtotext select'>select your color below </h2>

              </div>
             

            </div> : null }
          



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

              
            <div className='designbuttons' style={{display:'flex', width:'70vw', justifyContent:'space-between', alignItems:'center'}}>

  <div className='knitStatus custButt' onClick={() => setSaveShow(prev => !prev)}style={{backgroundColor:'orange'}}>CANCEL</div>

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

<div className='knitStatus custButt' onClick={handleSubmit}>SAVE</div>

            </div>
</div>
        </div>
            : 
            <div>
              <br/>
  <div className='designbuttons' style={{display:'flex', width:'60vw', justifyContent:'space-between', alignItems:'center'}}>


 

<h1 style={{margin:'0px'}}>Design Lab</h1>

<div className='knitStatus custButt' onClick={() => setSaveShow(prev => !prev)}>SAVE</div>
<div>
<div className='knitStatus custButt' onClick={clearColor} style={{backgroundColor:'orange'}}>CLEAR</div>
</div>
</div>

</div>
           
              }

            </form>

            </div>
            
      


        <div className='sockpatt'>
<br/>
            <div className='page-cont'>
                    <WholeSock />
                    <RibS onClick={() => getColor('rib')} style={{fill: ribColor}}/>
                    <AnkleS onClick={() => getColor('ankle')} style={{fill: ankleColor}}/>
                    <FootS onClick={() => getColor('foot')} style={{fill: footColor}}/>
                    <HeelS onClick={() => getColor('heel')} style={{fill: heelColor}}/>
                    <ToeS onClick={() => getColor('toe')} style={{fill: toeColor}}/>

            </div>
            
            <div className='color-picker'>
                      
                      <h3 style={{marginBottom:'10px'}}>Stash Colors</h3>
                      <SwatchesPicker 
                      width={1000} height={55} color={color} colors={mycolors} onChange={updatedColor => setColor(updatedColor.hex)}/>
                     
                    
                      <br/>
                      <SwatchesPicker 
                      width={1000} height={160} color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>
                      {/* <h2>You picked {color}</h2>   */}
            </div>
  
            </div>
            <br/><br/><br/>
<div className='chaosButton custButt' onClick={() => chaosMode()}><div style={{}}><p className='chaosText'>CHAOS <br/> MODE</p></div></div>
            <div style={{height:'100px'}}></div>   
        </div>

            
        </div>
  )
}

export default DesignPage