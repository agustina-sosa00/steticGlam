import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Service } from "./view/Service/Service";
import Home from "./view/Home/Home";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Service />
      <Footer />
    </>
  );
}

export default App;
