import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import DesignPage from './Pages/DesignPage';
import Home from './Pages/Home';
import Library from './Pages/Library';
import SockDetail from './Pages/SockDetail';




function App() {

  const [sock, setSock] = useState(null);
  const [designs, setDesigns] = useState(null);
  const url = "http://localhost:8000/socks/"

  function getDesigns() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setDesigns(res))
      .catch(console.error);
    }

  function getOne(id) {
    fetch(url + id)
    .then((res) => res.json())
    .then((res) => setSock(res))
    .catch(console.error);
  }

  const deleteDesign = (id) => {
    fetch(url + id, {
      method: "delete",
    });
    <Navigate to='/design-library'/>
  };
  
  //   const updateDesign = async (id) => {
  //     await fetch(url + id, {
  //       method: "put",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(design),
  //     });
  //     getDesigns();
  //   };
  
  //   const deleteDesigns = async (id) => {
  //     await fetch(url + id, {
  //       method: "delete",
  //     });
  //     getDesigns();
  //   };


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
      <Route path="/the-lab" element={<DesignPage url={url}/>}/>
      <Route path="/design-library" element={<Library getDesigns={getDesigns} designs={designs} />}/>
      <Route path="/design-library/socks/:id" element={<SockDetail sock={sock} setSock={setSock} getOne={getOne} deleteDesign={deleteDesign}/>}/>
      </Routes>

    
    </div>
  );
}

export default App;
