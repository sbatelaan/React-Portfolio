import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Social />
      
      <About />
      <div className="flex flex-wrap">
      <Portfolio />
      <Technologies />
      <Contact />
      </div>
    </div>
  );
}

export default App;
