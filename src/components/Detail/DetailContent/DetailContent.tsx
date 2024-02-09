import { useEffect } from "react";
import { Section } from "../../../models/Section";
import "./DetailContent.css";

interface DetailContentProps {
  sections: Section[];
}

export const DetailContent = ({ sections }: DetailContentProps) => {
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
      </div>
      <div className="dt-content-right" />
    </div>
  );
};
