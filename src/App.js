import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Form from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "grey";

    }
  }
  return (
    <>
      <Navbar title='TextUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Form heading="Enter The Text To Analyze" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  )

}

export default App;
