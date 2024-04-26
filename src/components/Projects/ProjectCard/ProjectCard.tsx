import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

interface ProjectCardProps {
  goto: string;
  imgPath: string;
  summary: string;
  isExternalLink?: boolean;
}

export const ProjectCard = ({
  goto,
  imgPath,
  summary,
  isExternalLink,
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate(goto);
  };

  const openExternalLink = () => {
    window.open(goto);
  };

  return (
    <button
      className="card-button-button"
      onClick={() => {
        isExternalLink ? openExternalLink() : onButtonClick();
      }}
    >
      <div className="card-button-wrapper">
        <img
          className={
            isExternalLink ? "certs-card-button-img" : "card-button-img"
          }
          src={imgPath}
          alt={summary}
        />
        <div className="card-button-text-container">
          <p className="card-button-text">{summary}</p>
        </div>
      </div>
    </button>
  );
};
