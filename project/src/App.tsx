import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h1>stetic glam</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
