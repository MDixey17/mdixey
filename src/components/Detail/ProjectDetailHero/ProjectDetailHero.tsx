import { TechChips } from "../../TechChips/TechChips";
import "./ProjectDetailHero.css";

interface ProjectDetailHeroProps {
  name: string;
  techStack: string[];
  bgClass: string;
}

export const ProjectDetailHero = ({
  name,
  techStack,
  bgClass,
}: ProjectDetailHeroProps) => {
  return (
    <div className={`proj-detail-hero-wrapper blue-bottom-border ${bgClass}`}>
      <div className="proj-detail-hero-left">
        <h1 className="blue-gradient-text">{name}</h1>
        <TechChips tech={techStack} />
      </div>
      <div className="proj-detail-hero-right" />
    </div>
  );
};
