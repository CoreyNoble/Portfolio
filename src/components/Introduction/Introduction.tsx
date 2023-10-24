import "./Introduction.scss";

export const Introduction = () => {
  return (
    <section className="introduction flex align-center justify-space-around">
      <div className="introduction-primary">
        <h2>Title 2</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="introduction-secondary">
        <div className="photo"></div>
      </div>
    </section>
  );
};
