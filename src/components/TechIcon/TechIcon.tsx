import "./TechIcon.css";

interface TechIconProps {
  imgPath: string;
  altText: string;
}

export const TechIcon = ({ imgPath, altText }: TechIconProps) => {
  return <img className="tech-icon" src={imgPath} alt={altText} />;
};
