import { TechChips } from "../../TechChips/TechChips";
import "./ExperienceDetailHero.css";

interface ExperienceDetailHeroProps {
  employer: string;
  title: string;
  duration: string;
  bgClass: string;
  techStack: string[];
}

export const ExperienceDetailHero = ({
  employer,
  title,
  duration,
  bgClass,
  techStack,
}: ExperienceDetailHeroProps) => {
  return (
    <div className={`exp-detail-hero-wrapper ${bgClass} blue-bottom-border`}>
      <div className="exp-detail-hero-left">
        <h1 className="blue-gradient-text">{title}</h1>
        <h2>{employer}</h2>
        <h2>{duration}</h2>
        <TechChips tech={techStack} />
      </div>
      <div className="exp-detail-hero-right" />
    </div>
  );
};
