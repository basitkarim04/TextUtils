import './App.css';
import React, { useState,useEffect  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"; 
//import About from './Components/About';

function App() {
  const [Mode , SetMode] = useState('light');
  const toggleMode = () => {
    if(Mode === 'light'){
      SetMode ('dark');
            }
      else{
        SetMode ('light');
            }};
        useEffect(() => {
          // Set the initial background color
          document.body.style.backgroundColor = Mode === 'light' ? 'white' : 'black';
        }, [Mode]);
      
        useEffect(() => {
          // Update background co~lor when Mode changes
          document.body.style.backgroundColor = Mode === 'light' ? 'white' : 'black';
        }, [Mode]);

  return (
    <div className={`App ${Mode}`}>
     <Navbar Mode={Mode} toggleMode={toggleMode}/>
    {/* <About/> */}
    </div>
  );
}

export default App;
