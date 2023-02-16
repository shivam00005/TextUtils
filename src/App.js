import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Form from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(35 35 46)";
      document.body.style.color = "white";
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert('light mode has been enabled', 'success')


    }
  }
  return (
    <>
      <Navbar title='TextUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Form heading="Enter The Text To Analyze" mode={mode} showAlert={showAlert} />
      </div>
      {/* <About /> */}
    </>
  )

}

export default App;
