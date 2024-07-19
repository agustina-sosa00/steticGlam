import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Service } from "./view/Service/Service";
import Home from "./view/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { About } from "./view/About/About";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Service />

      <Footer />
    </>
  );
}

export default App;
