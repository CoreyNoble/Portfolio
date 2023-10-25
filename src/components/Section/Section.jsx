import { Divider } from "../../components/Divider/Divider";
import "./Section.scss";

export const Section = ({ firstTitle, secondTitle, description }) => {
  return (
    <div className="section">
      {firstTitle && (
        <>
          <h2>{firstTitle}</h2>
          <Divider />
        </>
      )}
      {secondTitle && <h3>{secondTitle}</h3>}
      {description && <p>{description}</p>}
    </div>
  );
};
