import './App.css';
import Alert from './components/Alert.js';
import Nav from './components/Nav.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled","success");
      document.title="Texty - Dark Mode"
      setInterval(()=>{
        document.title='Texty is texy...'
      },1000)
      setInterval(()=>{
        document.title='Texty is sexy...'
      },1400)
      setInterval(()=>{
        document.title='Install ASAP!!!'
      },1800)
    }
    
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
      document.title="Texty - Light Mode"



    }
  }
  return (
    <>
    <Router>
<Nav title='Texty' mode={mode} toggleMode={toggleMode}></Nav>
<Alert alert={alert} />
<div className="container my-3" >
  
<Routes>
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode}/>} />
  </Routes>
</div>
</Router>
</>
  );
}

export default App;
