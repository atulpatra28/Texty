import './App.css';
import Nav from './components/Nav.js';
import TextForm from './components/TextForm.js';
function App() {
  return (
    <>
<Nav title='Texty'></Nav>
<div className="container my-3" >
  <TextForm heading="Enter text to analyse"/>
</div>
</>
  );
}

export default App;
