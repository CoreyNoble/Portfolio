import { useState } from "react";
import "./App.scss";
import "../src/utils/spacing.scss";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Button } from "./components/Button/Button";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="App">
      <Button className="m-b-l" onClick={toggleDarkMode}>
        Toggle Theme ({isDarkMode ? "Light Mode" : "Dark Mode"})
      </Button>

      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
