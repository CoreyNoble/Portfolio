import "./App.scss";
import { Hero } from "./components/Hero/Hero";
import { Introduction } from "./components/Introduction/Introduction";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Hero />
      <Introduction />
      <Skills />
    </div>
  );
}

export default App;
