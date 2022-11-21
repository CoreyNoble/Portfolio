import Section from "../../components/Section/Section";
import logo_amazon from "../../assets/img/logos/amazon.svg";
import logo_evertzMicrosystems from "../../assets/img/logos/evertz-microsystems.svg";
import logo_thrillworks from "../../assets/img/logos/thrillworks.svg";
import './Experience.scss';

function Experience() {
  return (
    <Section title="Experience" spacing={true}>
      <div className="experience">
        <img src="https://via.placeholder.com/1280x1200.png" />
        {logo_amazon}
        {logo_evertzMicrosystems}
        {logo_thrillworks}
      </div>
    </Section>
  );
}

export default Experience;
