import './App.css';
import Nav from './components/Nav.js';
import TextForm from './components/TextForm.js';
import React,{useState} from 'react'

function App() {

  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <>
<Nav title='Texty' mode={mode} toggleMode={toggleMode}></Nav>
<div className="container my-3" >
  <TextForm heading="Enter text to analyse" mode={mode}/>
</div>
</>
  );
}

export default App;
