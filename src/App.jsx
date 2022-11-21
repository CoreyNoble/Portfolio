import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navigation from "./sections/Navigation/Navigation";
import Hero from "./sections/Hero/Hero";
import Portfolio from "./sections/Portfolio/Portfolio";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import "./App.scss";
import "../src/utils/spacing.scss";

function App() {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className="App" data-theme={theme}>
        <Navigation />
        <Hero />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
