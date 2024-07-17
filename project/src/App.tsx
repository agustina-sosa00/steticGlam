import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./view/Home/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h1>stetic glam</h1>
        <Home/>
      </BrowserRouter>
    </>
  );
}

export default App;
