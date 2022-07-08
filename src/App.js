import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import DesignPage from './Pages/DesignPage';
import Home from './Pages/Home';
import Library from './Pages/Library';
import SockDetail from './Pages/SockDetail';




function App() {

  const [designs, setDesigns] = useState(null);
  const url = "http://localhost:8000/socks/"

  function getDesigns() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setDesigns(res))
      .catch(console.error);
    }
  
  //   const updateDesigns = async (design, id) => {
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
  } 

  console.log(designs)


  return (
    <div className="App">
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/the-lab" element={<DesignPage url={url}/>}/>
      <Route path="/design-library" element={<Library designs={designs}/>}/>
      <Route path="/sock-detail" element={<SockDetail/>}/>
      </Routes>

    
    </div>
  );
}

export default App;
