import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/TextForm'

function App() {
  return (
    <>
      <Navbar title='TextUtils' aboutText='About TextUtils' />
      <div className="container my-3">
        <Form heading="Enter The Text To Analyze" />
      </div>
    </>
  )

}

export default App;
