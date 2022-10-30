import "./App.css";

import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Updates from "./Components/Updates";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Team from "../src/Components/Team";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Home />
      <Navbar2 />
      <About />
      <Service />
      <Updates />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
