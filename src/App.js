
import React from 'react';

import './App.css';
//import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import {useState} from 'react';
import Alerts from './Component/Alerts';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";



 

function App() 
{
  const [mode, setDarkMode] = useState('light'); 
  const [alert, setAlert] = useState(null );
   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    }) 
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor='#999900 ';
      showAlert("Dark mode has been enabled","success");
      document.title='WordCheck - Dark Mode';
    }
    else{   
      setDarkMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='WordCheck - Light Mode';
    } 
    }

  return (
      <>
    
    {/* <Router> */}
      <Navbar title="WordCheck" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert = {alert}/>  
      <div className="container my-3">
        {/* <Routes>   
          <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={*/}
            <TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>
        {/* </Routes> */}
      </div>
       {/* </Router> */}
    
    </> 
    
  );
}

export default App;
