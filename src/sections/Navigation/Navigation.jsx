import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Section from "../../components/Section/Section";
import "./Navigation.scss";

function Navigation() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [togglingTheme, setTogglingTheme] = useState(false);

  useEffect(() => {
    if (togglingTheme) {
      setTimeout(() => {
        setTogglingTheme(false);
      }, 800);
    }
  }, [togglingTheme]);

  const toggleTheme = (shouldToggle) => {
    if (shouldToggle) {
      setTheme(theme === "light" ? "dark" : "light");
      setTogglingTheme(true);
    }
  };

  return (
    <Section>
      <div className="navigation">
        <div className="navigation__logo">
          <span>
            <strong>Corey Noble</strong>
          </span>
        </div>
        <div
          className={`navigation__theme ${
            togglingTheme ? "toggling-theme" : ""
          }`}
        >
          <Button
            className="icon"
            onClick={() => {
              toggleTheme(!togglingTheme);
            }}
          >
            {togglingTheme && theme === "light" && (
              <FontAwesomeIcon icon={faMoon} title="toggle light mode" />
            )}
            {!togglingTheme && theme === "light" && (
              <FontAwesomeIcon
                className="sun"
                icon={faSun}
                title="toggle dark mode"
              />
            )}
            {togglingTheme && theme === "dark" && (
              <FontAwesomeIcon
                className="sun"
                icon={faSun}
                title="toggle dark mode"
              />
            )}
            {!togglingTheme && theme === "dark" && (
              <FontAwesomeIcon icon={faMoon} title="toggle light mode" />
            )}
          </Button>
        </div>
        <div className="navigation__ctas">
          <a
            href="https://github.com/CoreyNoble"
            target="_blank"
            rel="noopener noreferrer"
            title="View my GitHub Profile"
            className="button icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://ca.linkedin.com/in/corey-noble"
            target="_blank"
            rel="noopener noreferrer"
            title="View my LinkedIn Profile"
            className="button icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Navigation;
