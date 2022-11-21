import Section from "../../components/Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faUpRightFromSquare,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import portfolio_motusbank from "../../assets/img/portfolio/motusbank.png";
import portfolio_pc_financial from "../../assets/img/portfolio/pc-financial.png";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <Section title="Portfolio" inverse={true} spacing={true}>
      <div className="portfolio__item">
        <h3 className="portfolio__item-title">motusbank</h3>
        <div className="portfolio__item-content">
          <img src={portfolio_motusbank} />
          <div className="portfolio__item-content-external-link">
            <a
              href="https://github.com/CoreyNoble"
              target="_blank"
              rel="noopener noreferrer"
              title="View my GitHub Profile"
              className="button icon"
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
          <div className="portfolio__item-content-info">
            <ul>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="portfolio__item-content-skills">
            <ul>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="portfolio__item">
        <h3 className="portfolio__item-title">PC Financial</h3>
        <div className="portfolio__item-content">
          <img src={portfolio_pc_financial} />
          <div className="portfolio__item-content-external-link">
            <a
              href="https://github.com/CoreyNoble"
              target="_blank"
              rel="noopener noreferrer"
              title="View my GitHub Profile"
              className="button icon"
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
          <div className="portfolio__item-content-info">
            <ul>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
          <div className="portfolio__item-content-skills">
            <ul>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CoreyNoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my GitHub Profile"
                  className="button icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Portfolio;
