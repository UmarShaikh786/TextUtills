import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
// import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="textUtills" />
      {/* <TextForm heading="Enter Text To TextBox" /> */}
      <About/>
    </>
  );
}

export default App;
