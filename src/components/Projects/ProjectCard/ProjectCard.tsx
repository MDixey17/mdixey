import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

interface ProjectCardProps {
  goto: string;
  imgPath: string;
  summary: string;
}

export const ProjectCard = ({ goto, imgPath, summary }: ProjectCardProps) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate(goto);
  };

  return (
    <button
      className="card-button-button"
      onClick={() => {
        onButtonClick();
      }}
    >
      <div className="card-button-wrapper">
        <img className="card-button-img" src={imgPath} alt={summary} />
        <div className="card-button-text-container">
          <p className="card-button-text">{summary}</p>
        </div>
      </div>
    </button>
  );
};
