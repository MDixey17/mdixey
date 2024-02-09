import "./TechChips.css";

interface TechChipsProps {
  tech: string[];
}

export const TechChips = ({ tech }: TechChipsProps) => {
  return (
    <div className="tc-wrapper">
      {tech.map((t) => {
        return (
          <div className="tc-container">
            <p className="tc-text">{t}</p>
          </div>
        );
      })}
    </div>
  );
};
