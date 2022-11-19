import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.scss";

function Navigation() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navigation">
      <div className="navigation__logo">
        <img src="https://via.placeholder.com/200x50.png" />
      </div>
      <div className="navigation__ctas">
        <Button className="icon" onClick={toggleTheme}>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} title="toggle dark mode" />
          ) : (
            <FontAwesomeIcon icon={faSun} title="toggle light mode" />
          )}
        </Button>
      </div>
    </div>
  );
}

export default Navigation;
