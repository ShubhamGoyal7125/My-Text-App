import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route ,
//   Link
// } from "react-router-dom";

import "./App.css";
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled Successfully", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled Successfully", "success");
    }
  }

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    // <Router>
      <>
      <Navbar title="Text App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} title="Enter the Text to analyze" mode={mode} />
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route eaxct path="/" element={<TextForm showAlert={showAlert} title="Enter the Text to analyze" mode={mode} />} />
      </Routes> */}
      </>
    // </Router>
  );
}

export default App;
