import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import DesignPage from './Pages/DesignPage';
import Home from './Pages/Home';




function App() {

  const [ header, setHeader ] = useState('home')

  const headerChange = (page) => {
    setHeader(page)
    console.log(header)
  }

  // useEffect(() => {
  //   headerChange()
  // }, [])


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
