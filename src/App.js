import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import DesignPage from './Pages/DesignPage';


function App() {
  return (
    <div className="App">
       <header className="App-header">
        <Link to='/'><h1 className='site-title'>sock lab</h1></Link>
        <Link to='/the-lab'><h2>design</h2></Link>
        <h2>library</h2>
        <h2>map</h2>
      </header>
      <div className='dash-divider'></div>
      <div className='check-cont'> <div className='checkbord-l'></div>
      <div className='checkbord-r'></div></div>
     
<Routes>
        {/* <Route path='/app' element={<App users={users}/>} /> */}
        <Route path="/the-lab" element={<DesignPage/>}/>
        
      </Routes>

    
    </div>
  );
}

export default App;
