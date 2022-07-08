import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import DesignPage from './Pages/DesignPage';
import Home from './Pages/Home';




function App() {

  const [designs, setDesigns] = useState(null);
  const url = "http://localhost:3001/users"

  function getDesigns() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setDesigns(res))
      .catch(console.error);
  }

  const [ header, setHeader ] = useState('home')

  const headerChange = (page) => {
    setHeader(page)
    console.log(header)
  }

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
      <Route path="/" element={<Home header={header} headerChange={headerChange} />}/>
      <Route path="/the-lab" element={<DesignPage/>}/>
      </Routes>

    
    </div>
  );
}

export default App;
