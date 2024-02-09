import { Section } from "./Section";

export interface Experience {
  imgPath: string;
  employer: string;
  title: string;
  duration: string;
  section: Section[];
  techStack: string[];
  goto: string;
  className: string;
}
