import { Button } from '../Button/Button';
import './Navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <img src="https://via.placeholder.com/200x50.png" />
      </div>
      <div className="navigation__ctas">
        <img src="https://via.placeholder.com/59x50.png" />
        <img src="https://via.placeholder.com/59x50.png" />
      </div>
    </div>
  );
}

export default Navigation;
