import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-sucess')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-primary')
  // }
  const toggleMode= ()=>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
    if (mode==='light') {
      setMode('dark'); 
      document.body.style.backgroundColor='#042743';  
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
   }
  const [modeRed, setModeRed] = useState('light');
  const toggleModeRed= ()=>{
    if (modeRed==='light') {
      setModeRed('dark'); 
      document.body.style.backgroundColor='red';  
    }
    else{
      setModeRed('light');
      document.body.style.backgroundColor='white';
    }
   }
  return (
  <>
  <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeRed={modeRed} toggleModeRed={toggleModeRed}/>
      <div className="container my-3">
        <Routes>
          {/*why exact?
            /users-->Component 1
            /users/home-->Component2*/}
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} modeRed={modeRed} />}>
          </Route>
            <Route exact path="/about" element={<About mode={mode}/>} /></Routes> 
      </div>
    </Router>
  </>
  );
}

export default App;
