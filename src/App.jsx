import { useState, createContext } from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import "../src/utils/spacing.scss";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {}
});

function App() {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className="App" data-theme={theme}>
        <div className="App__container">
          <Navigation />
          <Hero />
          <Portfolio />
          <About />
          <Contact />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
