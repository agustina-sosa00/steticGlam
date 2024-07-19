import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Service } from "./view/Service/Service";
import Home from "./view/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { About } from "./view/About/About";
import { Contact } from "./view/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
