import "./Section.scss";

function Section(props) {
  return (
    <div
      className={`section${props.inverse ? " inverse" : ""}${
        props.spacing ? " spacing" : ""
      }${props.hero ? " hero-spacing" : ""}`}
    >
      <div className="section__container">
        {props.title && (
          <h2 className="section__container-header">{props.title}</h2>
        )}
        {props.children}
      </div>
    </div>
  );
}

export default Section;
