import { Certificates } from "../../constants/Certificates";
import { ProjectCard } from "../Projects/ProjectCard/ProjectCard";

import "./CertificateSection.css";

export const CertificateSection = () => {
  return (
    <div className="certificates-wrapper">
      <h1 className="certificates-header">Certificates</h1>
      <p>
        Every day, I strive to continue learning more about software engineering
        by completing online courses and certifications to add more technologies
        to my skillset.
      </p>
      <div className="certificates-card-container">
        <div className="certs-cards-left"></div>
        <div className="certs-cards-center">
          {Certificates.map((cert) => {
            return (
              <ProjectCard
                goto={cert.url}
                imgPath={cert.imgPath}
                summary={cert.name}
                isExternalLink
              />
            );
          })}
        </div>
        <div className="certs-cards-right"></div>
      </div>
    </div>
  );
};
