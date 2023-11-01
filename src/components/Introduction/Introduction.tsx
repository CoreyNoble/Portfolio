import { Section } from "../../components/Section/Section";
import avatar from "../../assets/img/avatar.png";

import "./Introduction.scss";

export const Introduction = () => {
  return (
    <section className="introduction constrained row m-b-xxxl">
      <div className="introduction-primary m-b-xxxl col-sm-12 col-lg-6">
        <Section
          firstTitle="What I bring to the&nbsp;table"
          secondTitle="Over a decade of&nbsp;tinkering"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        />
      </div>

      <div className="introduction-secondary col-sm-12 col-lg-6">
        <img src={avatar} alt="" />
      </div>
    </section>
  );
};
