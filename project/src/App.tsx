import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Service } from "./components/Service/Service";
import Home from "./view/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Service />
    </>
  );
}

export default App;
