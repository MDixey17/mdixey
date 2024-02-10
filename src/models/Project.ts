import { Section } from "./Section";

export interface Project {
  imgPath: string;
  name: string;
  duration: string;
  sections: Section[];
  techStack: string[];
  goto: string;
  className: string;
  githubLink?: string;
  demoLink?: string;
}
