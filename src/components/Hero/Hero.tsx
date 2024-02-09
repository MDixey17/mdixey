import "./Hero.css";
import TargetLogo from "../../assets/images/logos/target.png";
import GELogo from "../../assets/images/logos/gopheresports.png";
import MLBLogo from "../../assets/images/logos/mlb.png";

export const Hero = () => {
  return (
    <div className="hero-wrapper blue-bottom-border">
      <div className="hero-text">
        <p className="hero-primary-text blue-gradient-text">
          Hello World! I'm Matt,
        </p>
        <p className="hero-secondary-text">a full-stack software engineer.</p>
      </div>
      <div className="hero-images">
        <img src={TargetLogo} alt={"Target"} />
        <img
          src={GELogo}
          alt={"University of Minnesota Golden Gopher Esports"}
        />
        <img src={MLBLogo} alt={"Major League Baseball"} />
      </div>
    </div>
  );
};
