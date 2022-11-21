import Section from "../../components/Section/Section";
import "./Hero.scss";

function Hero() {
  return (
    <Section spacing={true} hero={true}>
      <div className="hero">
        <div className="hero__introduction">
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
      </div>
    </Section>
  );
}

export default Hero;
