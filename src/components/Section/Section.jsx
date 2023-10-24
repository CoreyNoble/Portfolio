import { Divider } from "../../components/Divider/Divider";
import "./Section.scss";

export const Section = ({ firstTitle, secondTitle, description }) => {
  return (
    <div className="section">
      <h2>{firstTitle}</h2>
      <Divider />
      <h3>{secondTitle}</h3>
      <p>{description}</p>
    </div>
  );
}
