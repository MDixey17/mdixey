import { Projects } from "../../constants/Projects";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./ProjectSection.css";

export const ProjectSection = () => {
  return (
    <div className="projects-wrapper blue-bottom-border">
      <h1 className="projects-header">Projects</h1>
      <p>
        During my free time, I find unique projects and applications to build to
        showcase my knowledge and skillset.
      </p>
      <div className="projects-card-container">
        <div className="cards-left"></div>
        <div className="cards-center">
          {Projects.map((project) => {
            return (
              <ProjectCard
                goto={project.goto}
                imgPath={project.imgPath}
                summary={project.name}
              />
            );
          })}
        </div>
        <div className="cards-right"></div>
      </div>
    </div>
  );
};
