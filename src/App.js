import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
// import About from './components/About';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#36454f";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-4">
        {/* <Routes>*
          <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* }>
          </Route>
          <Route exact path="/about" element=
            {<About mode={mode} />}
          >
          </Route>
        </Routes>
        /* <About/> */}
      </div>
      {/*</Router>*/} 
    </>
  );
}

export default App;
