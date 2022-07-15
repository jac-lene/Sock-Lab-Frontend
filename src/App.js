import React, {useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import DesignPage from './Pages/DesignPage';
import Home from './Pages/Home';
import Library from './Pages/Library';
import SockDetail from './Pages/SockDetail';
import UpdateDesign from './Pages/UpdateDesign';
import StashView from './Pages/StashView';





function App() {

  const navigate = useNavigate()

  const [sock, setSock] = useState(null);
  const [designs, setDesigns] = useState(null);
  const url = "http://localhost:8000/socks/"

  const getDesigns = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => res.reverse())
      .then((res) => setDesigns(res))
      .catch(console.error);
    }

  const getOne = async (id) => {
    await fetch(url + id)
    .then((res) => res.json())
    .then((res) => setSock(res))
    .catch(console.error);
  }

  const deleteDesign = async (id) => {
    await fetch(url + id, {
      method: "delete",
    })
    .then(() => {
      navigate('/design-library')
      setDesigns(designs)
    })
  };
  
    const updateDesign = async (id) => {
      await fetch(url + id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sock),
      });
      setDesigns(designs)
    };

  // const [ header, setHeader ] = useState('home')

  // const headerChange = (page) => {
  //   setHeader(page)
  //   // console.log(header)
  // }

  

const randomColors = () => {
  const swatchColors = [ '#b71c1c', '#b71c1c', '#880e4f', '#4a148c', '#4a148c', '#4a148c', '#311b92', '#1a237e', '#0d47a1', '#01579b', '#01579b', '#006064', '#004d40', '#194d33', '#33691e', '#827717', '#f57f17', '#ff6f00', '#e65100', '#bf360c', '#3e2723', '#263238', '#000000', '#525252', '#455a64', '#5d4037', '#e64a19', '#f57c00', '#ffa000', '#fbc02d', '#afb42b', '#689f38', '#388e3c', '#00796b', '#0097a7', '#0288d1', '#1976d2', '#303f9f', '#512da8', '#7b1fa2', '#c2185b', '#d32f2f', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b', '#969696', '#d9d9d9', '#90a4ae', '#a1887f', '#ff8a65', '#ffb74d', '#ffd54f', '#fff176', '#dce775', '#aed581', '#81c784', '#4db6ac', '#4dd0e1', '#4fc3f7', '#64b5f6', '#7986cb', '#9575cd', '#ba68c8', '#f06292', '#e57373', '#ffcdd2', '#f8bbd0', '#e1bee7', '#d1c4e9', '#c5cae9', '#bbdefb', '#b3e5fc', '#b2ebf2', '#b2dfdb', '#c8e6c9', '#dcedc8', '#f0f4c3', '#fff9c4', '#ffecb3', '#ffe0b2', '#ffccbc', '#d7ccc8', '#cfd8dc', '#ffffff']
  let random = Math.floor(Math.random() * 101);
  return(
    swatchColors[random]
    )
   
}

  useEffect(() => {
    getDesigns()
  }, [])



  if (!designs) {
    console.log('loading...')
  } 

  


  return (
    <div className="App">
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/the-lab" element={<DesignPage url={url} designs={designs} setDesigns={setDesigns} randomColors={randomColors}/>}/>
      <Route path="/design-library" element={<Library getDesigns={getDesigns} designs={designs} />}/>
      <Route path="/design-library/socks/:id" element={<SockDetail url={url} sock={sock} setSock={setSock} getOne={getOne} deleteDesign={deleteDesign} updateDesign={updateDesign} getDesigns={getDesigns} designs={designs} setDesigns={setDesigns} />}/>
      <Route path="/design-library/socks/:id/edit" element={<UpdateDesign  url={url} sock={sock} setSock={setSock} getOne={getOne} deleteDesign={deleteDesign} designs={designs} getDesigns={getDesigns} updateDesign={updateDesign} />}/>

      <Route path="/stash" element={<StashView/>}/>
      </Routes>

    
    </div>
  );
}

export default App;
