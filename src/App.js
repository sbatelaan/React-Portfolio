import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Social />
      <About />
      <Portfolio />
      <div className="flex flex-wrap">
      <Experience />
      <Contact />
      </div>
    </div>
  );
}

export default App;
