import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./BackToTop.scss";

function BackToTop() {
  return (
    <div className="back-to-top">
      <FontAwesomeIcon icon={faArrowUp} title="Go to top" />
    </div>
  );
}

export default BackToTop;
