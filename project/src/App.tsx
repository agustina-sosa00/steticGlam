import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./view/Home/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Home/>
      </BrowserRouter>
    </>
  );
}

export default App;
