import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__animation">
        <img src="https://via.placeholder.com/600x600.png" />
      </div>
      <div className="hero__introduction">
        <h1>Corey Noble</h1>
        <h2>Web Development Engineer II</h2>
      </div>
      <div className="hero__badge">
        <div className="hero__badge-icon">
          <img src="https://via.placeholder.com/60x60.png" />
        </div>
        <div className="hero__badge-title">
          <h3>Amazon, 1+ years</h3>
        </div>
        <div className="hero__badge-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* <div className="hero__skills">
        <button>View skills</button>
      </div> */}
    </div>
  );
}

export default Hero;
