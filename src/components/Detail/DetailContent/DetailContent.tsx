import { useEffect } from "react";
import { Section } from "../../../models/Section";
import "./DetailContent.css";
import { GITHUB } from "../../../constants/Tech";
import PlayIcon from "../../../assets/images/icons/play.png";

interface DetailContentProps {
  sections: Section[];
  githubLink?: string;
  demoLink?: string;
}

export const DetailContent = ({
  sections,
  demoLink,
  githubLink,
}: DetailContentProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="detail-content-wrapper">
      <div className="dt-content-left" />
      <div className="dt-content-middle">
        {sections.map((section) => {
          return (
            <>
              <h2 className="dt-mid-header">{section.heading}</h2>
              <p className="dt-mid-text">{section.content}</p>
              {section.attachments.map((attachment) => {
                return (
                  <img
                    className="dt-mid-img"
                    src={attachment}
                    alt={section.heading}
                  />
                );
              })}
            </>
          );
        })}
        {(githubLink || demoLink) && (
          <div className="dt-link-wrapper">
            {githubLink && (
              <div className="dt-link-container">
                <img
                  className="dt-link-image"
                  src={GITHUB.imgPath}
                  alt={GITHUB.tech}
                />
                <a
                  className="dt-link-text"
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub Repo
                </a>
              </div>
            )}
            {demoLink && (
              <div className="dt-link-container">
                <img className="dt-link-image" src={PlayIcon} alt="Demo" />
                <a
                  className="dt-link-text"
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Demo
                </a>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="dt-content-right" />
    </div>
  );
};
