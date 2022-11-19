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
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="App__container">
        <Button className="m-b-l" onClick={toggleTheme}>
          Toggle Theme ({theme ? "Light Mode" : "Dark Mode"})
        </Button>

        <Navigation />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
