import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("Light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "Dark") {
      setMode("Light");
      document.body.style.backgroundColor = "white";
      document.body.style.Color = "black";
      showAlert(": Light Mode is Enabled..", "success");
    } else {
      setMode("Dark");
      document.body.style.backgroundColor = "black";
      document.body.style.Color = "white";
      showAlert(": Dark Mode is Enabled..", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utills"
          showalert={showAlert}
          mode={mode}
          toggle={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/Home"
            element={
              <TextForm
                lighter="active"
                heading="Enter Text To TextBox"
                mode={mode}
                showalert={showAlert}
              />
            }
          />

                
                <Route path="/About" element={<About  mode={mode}/>}
          />
          

          
        </Routes>
      </Router>
    </>
  );
}

export default App;
