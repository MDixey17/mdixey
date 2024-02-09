import Headshot from "../../assets/images/me/headshot.jpg";
import { URL_GITHUB, URL_LINKEDIN } from "../../constants/Links";
import { GITHUB, LINKEDIN } from "../../constants/Tech";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left-container">
        <a href="/mdixey">
          <img className="navbar-me" src={Headshot} alt="Matthew Dixey" />
        </a>
        <p>Matthew Dixey</p>
      </div>
      <div className="navbar-right-container">
        <a href={URL_GITHUB}>
          <img
            className="navbar-social"
            src={GITHUB.imgPath}
            alt={GITHUB.tech}
          />
        </a>
        <a href={URL_LINKEDIN}>
          <img
            className="navbar-social"
            src={LINKEDIN.imgPath}
            alt={LINKEDIN.tech}
          />
        </a>
      </div>
    </div>
  );
};
