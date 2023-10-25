import { Section } from "../Section/Section";
import iconPhotoshop from "../../assets/img/icons/adobe-photoshop.svg";
import iconChrome from "../../assets/img/icons/chrome.svg";
import iconCypress from "../../assets/img/icons/cypress.svg";
import iconDocker from "../../assets/img/icons/docker.svg";
import iconEdge from "../../assets/img/icons/edge.svg";
import iconFigma from "../../assets/img/icons/figma.svg";
import iconFirefox from "../../assets/img/icons/firefox.svg";
import iconGit from "../../assets/img/icons/git.svg";
import iconHTML from "../../assets/img/icons/html.svg";
import iconJest from "../../assets/img/icons/jest.svg";
import iconLighthouse from "../../assets/img/icons/lighthouse.svg";
import iconNode from "../../assets/img/icons/node.svg";
import iconReact from "../../assets/img/icons/react.svg";
import iconSafari from "../../assets/img/icons/safari.svg";
import iconSASS from "../../assets/img/icons/sass.svg";
import iconStorybook from "../../assets/img/icons/storybook.svg";
import iconRTL from "../../assets/img/icons/testing-library.svg";
import iconTypeScript from "../../assets/img/icons/typescript.svg";
import iconVSCode from "../../assets/img/icons/visual-studio-code.svg";

import "./Skills.scss";

export const Skills = () => {
  return (
    <section className="skills constrained flex justify-space-around">
      <div className="skills-primary">
        <Section firstTitle="Primary Technologies" />
        <div className="skills-list">
          <img src={iconReact} className="rotate-clockwise" alt="" />
          <img src={iconTypeScript} alt="" />
          <img src={iconSASS} alt="" />
          <img src={iconHTML} alt="" />
          <img src={iconGit} alt="" />
          <img src={iconJest} alt="" />
          <img src={iconRTL} alt="" />
          <img src={iconCypress} alt="" />
          <img src={iconStorybook} alt="" />
        </div>
      </div>

      <div className="skills-secondary">
        <Section firstTitle="Secondary Technologies" />
        <div className="skills-list">
          <img src={iconDocker} alt="" />
          <img src={iconNode} alt="" />
          <img src={iconLighthouse} alt="" />
          <img src={iconFigma} alt="" />
          <img src={iconPhotoshop} alt="" />
          <img src={iconVSCode} alt="" />
          <img src={iconChrome} className="rotate-counter-clockwise" alt="" />
          <img src={iconFirefox} alt="" />
          <img src={iconSafari} alt="" />
          <img src={iconEdge} alt="" />
        </div>
      </div>
    </section>
  );
};
