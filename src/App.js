import React, {useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import DesignPage from './Pages/DesignPage';
import Home from './Pages/Home';
import Library from './Pages/Library';
import SockDetail from './Pages/SockDetail';
import UpdateDesign from './Pages/UpdateDesign';





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

  useEffect(() => {
    getDesigns()
  }, [])



  if (!designs) {
    console.log('loading...')
  } else {console.log(designs)}

  


  return (
    <div className="App">
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/the-lab" element={<DesignPage url={url} designs={designs} setDesigns={setDesigns}/>}/>
      <Route path="/design-library" element={<Library getDesigns={getDesigns} designs={designs} />}/>
      <Route path="/design-library/socks/:id" element={<SockDetail url={url} sock={sock} setSock={setSock} getOne={getOne} deleteDesign={deleteDesign} updateDesign={updateDesign} getDesigns={getDesigns} designs={designs} setDesigns={setDesigns} />}/>
      <Route path="/design-library/socks/:id/edit" element={<UpdateDesign  url={url} sock={sock} setSock={setSock} getOne={getOne} deleteDesign={deleteDesign} designs={designs} getDesigns={getDesigns} updateDesign={updateDesign} />}/>
      </Routes>

    
    </div>
  );
}

export default App;
