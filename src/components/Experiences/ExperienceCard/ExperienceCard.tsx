import { LearnMoreButton } from "../../LearnMoreButton/LearnMoreButton";
import "./ExperienceCard.css";

interface ExperienceCardProps {
  imgPath: string;
  employer: string;
  jobTitle: string;
  duration: string;
  goto: string;
}

export const ExperienceCard = ({
  imgPath,
  employer,
  jobTitle,
  duration,
  goto,
}: ExperienceCardProps) => {
  return (
    <div className="exp-card-wrapper">
      <h1>{jobTitle}</h1>
      <img src={imgPath} alt={employer} />
      <h2>{employer}</h2>
      <h2>{duration}</h2>
      <LearnMoreButton goto={goto} />
    </div>
  );
};
