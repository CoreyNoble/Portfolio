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
    <section className="skills container">
      <div className="row">
        <div className="skills-primary col-sm-12 col-lg-6 m-b-xxxl">
          <Section firstTitle="Primary Technologies" />
          <div className="skills-list">
            <img src={iconReact} className="rotate-clockwise" alt="React JS" />
            <img src={iconTypeScript} alt="TypeScript" />
            <img src={iconSASS} alt="SASS" />
            <img src={iconHTML} alt="HTML" />
            <img src={iconGit} alt="Git" />
            <img src={iconJest} alt="Jest" />
            <img src={iconRTL} alt="React Testing Library" />
            <img src={iconCypress} alt="Cypress" />
            <img src={iconStorybook} alt="Storybook" />
          </div>
        </div>

        <div className="skills-secondary col-sm-12 col-lg-6 m-b-xxxl">
          <Section firstTitle="Secondary Technologies" />
          <div className="skills-list">
            <img src={iconDocker} alt="Docker" />
            <img src={iconNode} alt="Node JS" />
            <img src={iconLighthouse} alt="Google Lighthouse" />
            <img src={iconFigma} alt="Figma" />
            <img src={iconPhotoshop} alt="PhotoShop" />
            <img src={iconVSCode} alt="VS Code" />
            <img src={iconChrome} className="rotate-counter-clockwise" alt="Google Chrome" />
            <img src={iconFirefox} alt="Mozilla Firefox" />
            <img src={iconSafari} alt="Safari" />
            <img src={iconEdge} alt="Microsoft Edge" />
          </div>
        </div>
      </div>
    </section>
  );
};
