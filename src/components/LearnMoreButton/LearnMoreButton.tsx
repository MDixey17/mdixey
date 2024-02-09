import { useNavigate } from "react-router-dom";
import "./LearnMoreButton.css";

interface LearnMoreButtonProps {
  goto: string;
}

export const LearnMoreButton = ({ goto }: LearnMoreButtonProps) => {
  const navigate = useNavigate();

  const onLearnMoreClick = () => {
    navigate(goto);
  };

  return (
    <button
      className="learn-more"
      onClick={() => {
        onLearnMoreClick();
      }}
    >
      Learn more!
    </button>
  );
};
