import { useState } from "react";
import ChevronLeft from "../../assets/images/chevron-left-solid.svg";
import ChevronRight from "../../assets/images/chevron-right-solid.svg";
import { Jobs } from "../../constants/Jobs";
import "./Experience.css";
import { ExperienceCard } from "./ExperienceCard/ExperienceCard";

export const Experiences = () => {
  const [eIndex, setEIndex] = useState<number>(0);

  const onButtonClick = (change: number) => {
    setEIndex(eIndex + change);
  };

  return (
    <div className="experiences-wrapper blue-bottom-border">
      <div className="experiences-left">
        <h1 className="experiences-header">Experiences</h1>
        <p className="experiences-text">
          Learn about my work history with software engineering work in sports,
          esports, and retail industries.
        </p>
      </div>
      <div className="experiences-right">
        <button
          className={`exp-button exp-button-left ${
            eIndex === 0 ? "button-disabled" : ""
          }`}
          disabled={eIndex === 0}
          onClick={() => onButtonClick(-1)}
        >
          <img src={ChevronLeft} alt="Go back" />
        </button>
        <ExperienceCard
          imgPath={Jobs[eIndex].imgPath}
          employer={Jobs[eIndex].employer}
          jobTitle={Jobs[eIndex].title}
          duration={Jobs[eIndex].duration}
          goto={Jobs[eIndex].goto}
        />
        <button
          className={`exp-button exp-button-right ${
            eIndex === Jobs.length - 1 ? "button-disabled" : ""
          }`}
          disabled={eIndex === Jobs.length - 1}
          onClick={() => onButtonClick(1)}
        >
          <img src={ChevronRight} alt="Go forward" />
        </button>
      </div>
    </div>
  );
};
