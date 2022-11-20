import Section from "../Section/Section";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <Section title="Portfolio" inverse={true} spacing={true}>
      <div className="portfolio">
        <h1>
          Hi! 👋
          <br />
          I'm Corey Noble
        </h1>
        <p className="h2">
          A front-end engineer based in Ontario,&nbsp;Canada&nbsp;🇨🇦
        </p>
      </div>
      <div className="hero__animation">
        <img src="https://via.placeholder.com/700x600.png" />
      </div>
    </Section>
  );
}

export default Portfolio;
