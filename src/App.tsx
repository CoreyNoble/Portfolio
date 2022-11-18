import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
