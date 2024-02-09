import { DetailContent } from "../components/Detail/DetailContent/DetailContent";
import { ExperienceDetailHero } from "../components/Detail/ExperienceDetailHero/ExperienceDetailHero";
import { ProjectDetailHero } from "../components/Detail/ProjectDetailHero/ProjectDetailHero";
import { Experience } from "../models/Experience";
import { Project } from "../models/Project";

interface DetailPageProps {
  experience?: Experience;
  project?: Project;
}

export const DetailPage = ({ experience, project }: DetailPageProps) => {
  return (
    <>
      {experience && (
        <>
          <ExperienceDetailHero
            employer={experience.employer}
            title={experience.title}
            duration={experience.duration}
            bgClass={experience.className}
            techStack={experience.techStack}
          />
          <DetailContent sections={experience.section} />
        </>
      )}
      {project && (
        <>
          <ProjectDetailHero
            name={project.name}
            techStack={project.techStack}
            bgClass={project.className}
          />
          <DetailContent sections={project.sections} />
        </>
      )}
    </>
  );
};
