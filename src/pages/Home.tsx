import { Experiences } from "../components/Experiences/Experiences";
import { Hero } from "../components/Hero/Hero";
import { ProjectSection } from "../components/Projects/ProjectSection";
import { TechList } from "../components/TechList/TechList";

export const Home = () => {
  return (
    <>
      <Hero />
      <TechList />
      <Experiences />
      <ProjectSection />
    </>
  );
};
