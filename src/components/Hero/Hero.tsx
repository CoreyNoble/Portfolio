import "./Hero.scss";

export const Hero = () => {
  return (
    <section className="hero flex flex-direction-column align-center justify-center">
      <h1>
        Hello there! <span className="wave">👋🏻</span>
        <br />
        I'm Corey&nbsp;Noble
      </h1>
      <p className="h4 m-b-n">Front-End Software Engineer</p>
      <svg
        className="hero-separator"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 51"
        version="1.1"
      >
        <path
          fill="#F6F8FA"
          d="M1440,50.7652095 C1440,50.7652095 1077.44727,0 720,0 C362.552734,0 0,50.7652095 0,50.7652095 L1440,50.7652095 Z"
          id="path-1"
        />
      </svg>
    </section>
  );
};
