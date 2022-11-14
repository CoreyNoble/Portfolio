import React from 'react';
import './Hero.scss';

import profile from '../../assets/img/profile/Corey-Noble-Index-Portrait.png';
import {
  ADOBE_FIGMA,
  ADOBE_PHOTOSHOP,
  CASCADING_STYLESHEETS,
  CYPRESS,
  DOCKER,
  GIT,
  GOOGLE_LIGHTHOUSE,
  HYPER_TEXT_MARKUP_LANGUAGE,
  JAVASCRIPT,
  JEST,
  NODE,
  REACT,
  SYNTATCICALLY_AWESOME_STYLE_SHEETS,
  TESTING_LIBRARY,
  TYPESCRIPT,
} from '../../utils/images';

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__animation">
        <div className="hero__animation-profile">
          <img src={profile} alt="" />

          <div className="orbitals">
            <div className="orbital">
              <img src={ADOBE_PHOTOSHOP} alt="Adobe Photoshop" />
            </div>
            <div className="orbital">
              <img src={ADOBE_FIGMA} alt="Adobe Figma" />
            </div>
            <div className="orbital">
              <img className="pt-xs" src={CASCADING_STYLESHEETS} alt="Cascading Style Sheets" />
            </div>
            <div className="orbital">
              <img src={CYPRESS} alt="Cypress" />
            </div>
            <div className="orbital">
              <img src={DOCKER} alt="Docker" />
            </div>
            <div className="orbital">
              <img src={GIT} alt="Git" />
            </div>
            <div className="orbital">
              <img src={GOOGLE_LIGHTHOUSE} alt="Google Lighthouse" />
            </div>
            <div className="orbital">
              <img className="pt-xs" src={HYPER_TEXT_MARKUP_LANGUAGE} alt="HyperText Markup Language" />
            </div>
            <div className="orbital">
              <img src={JAVASCRIPT} alt="JavaScript" />
            </div>
            <div className="orbital">
              <img src={JEST} alt="Jest" />
            </div>
            <div className="orbital">
              <img src={NODE} alt="Node" />
            </div>
            <div className="orbital">
              <img src={REACT} alt="React" />
            </div>
            <div className="orbital">
              <img src={SYNTATCICALLY_AWESOME_STYLE_SHEETS} alt="Syntactically Awesome Style Sheets" />
            </div>
            <div className="orbital">
              <img src={TESTING_LIBRARY} alt="Testing Library" />
            </div>
            <div className="orbital">
              <img src={TYPESCRIPT} alt="TypeScript" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero__details">
        <div className="hero__details-title">
          <h1>Corey Noble</h1>
          <h2>Web Development Engineer II (L5), Amazon</h2>
        </div>
        <div className="hero__details-ctas">

        </div>
        <div className="hero_details-badge">

        </div>
      </div>
    </div>
  );
};
