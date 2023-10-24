import "./App.scss";
import { Hero } from "./components/Hero/Hero";
import { Introduction } from "./components/Introduction/Introduction";

function App() {
  return (
    <div className="App">
      <Hero />
      <Introduction />
    </div>
  );
}

export default App;
