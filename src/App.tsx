import "./App.scss";
import { Hero } from "./components/Hero/Hero";
import { Introduction } from "./components/Introduction/Introduction";
import { Section } from "./components/Section/Section";
import { Button } from "./components/Button/Button";

function App() {
  function fireClick() {
    console.log("[e]");
  }

  return (
    <div className="App">
      <Hero />
      <Introduction />
      <section>
        <h1>
          H1 Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
          ghijkl mnopqr stuvwx yz
        </h1>
        <h2>
          H2 Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
          ghijkl mnopqr stuvwx yz
        </h2>
        <h3>
          H3 Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
          ghijkl mnopqr stuvwx yz
        </h3>
        <h4>
          H4 Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
          ghijkl mnopqr stuvwx yz
        </h4>
        <h5>
          H5 Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
          ghijkl mnopqr stuvwx yz
        </h5>
        <h6>
          H6 Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
          ghijkl mnopqr stuvwx yz
        </h6>
        <p>
          p Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef ghijkl
          mnopqr stuvwx yz
        </p>
        <ul>
          <li>
            UL Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
            ghijkl mnopqr stuvwx yz
          </li>
          <li>
            UL Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
            ghijkl mnopqr stuvwx yz
          </li>
        </ul>
        <ol>
          <li>
            OL Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
            ghijkl mnopqr stuvwx yz
          </li>
          <li>
            OL Test Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
            ghijkl mnopqr stuvwx yz
          </li>
        </ol>
        <p>
          with pre text{" "}
          <a href="https://google.ca" target="_blank">
            Visit Google
          </a>{" "}
          Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef ghijkl mnopqr
          stuvwx yz Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef
          ghijkl mnopqr stuvwx yz Lorem ipsum dolor sit amet. ! ? || & % 1234
          56789 abcdef ghijkl mnopqr stuvwx yz Lorem ipsum dolor sit amet. ! ?
          || & % 1234 56789 abcdef ghijkl mnopqr stuvwx yz Lorem ipsum dolor sit
          amet. ! ? || & % 1234 56789 abcdef ghijkl mnopqr stuvwx yz Lorem ipsum
          dolor sit amet. ! ? || & % 1234 56789 abcdef ghijkl mnopqr stuvwx yz
          Lorem ipsum dolor sit amet. ! ? || & % 1234 56789 abcdef ghijkl mnopqr
          stuvwx yz
        </p>

        <p>
          <a href="/">Test link</a>
        </p>

        <br />
        <br />
        <Button onClick={fireClick}>Primary Button</Button>
        <Button className="secondary" onClick={fireClick}>
          Secondary Button
        </Button>
        <Button onClick={fireClick} disabled>
          ABCDE
        </Button>
        <Button className="secondary" onClick={fireClick} disabled>
          FGHIJ
        </Button>
      </section>
    </div>
  );
}

export default App;
