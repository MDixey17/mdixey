import { TechStack } from "../models/TechStack";
import InsomniaLogo from "../assets/images/icons/insomnia.png";
import IntelliJLogo from "../assets/images/icons/intellij.png";
import JiraLogo from "../assets/images/icons/jira.png";
import KafkaLogo from "../assets/images/icons/kafka.png";
import MicronautLogo from "../assets/images/icons/micronaut.png";
import UnityLogo from "../assets/images/icons/unity.svg";
import UnrealEngineLogo from "../assets/images/icons/unrealengine.png";
import VisualStudioLogo from "../assets/images/icons/visualstudio.png";
import VSCodeLogo from "../assets/images/icons/vscode.svg";

const GH_BASE_URL = `https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills`;

const GH_SOCIALS_BASE_URL = `https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials`;

const VECTORLOGO_BASE_URL = `https://www.vectorlogo.zone/logos`;

export const TYPESCRIPT: TechStack = {
  tech: "TypeScript",
  imgPath: `${GH_BASE_URL}/typescript-colored.svg`,
};

export const JAVASCRIPT: TechStack = {
  tech: "JavaScript",
  imgPath: `${GH_BASE_URL}/javascript-colored.svg`,
};

export const HTML: TechStack = {
  tech: "HTML",
  imgPath: `${GH_BASE_URL}/html5-colored.svg`,
};

export const CSS: TechStack = {
  tech: "CSS",
  imgPath: `${GH_BASE_URL}/css3-colored.svg`,
};

export const REACT: TechStack = {
  tech: "React",
  imgPath: `${GH_BASE_URL}/react-colored.svg`,
};

export const PYTHON: TechStack = {
  tech: "Python",
  imgPath: `${GH_BASE_URL}/python-colored.svg`,
};

export const GOLANG: TechStack = {
  tech: "Golang",
  imgPath: `${GH_BASE_URL}/go-colored.svg`,
};

export const CPP: TechStack = {
  tech: "C++",
  imgPath: `${GH_BASE_URL}/cplusplus-colored.svg`,
};

export const CS: TechStack = {
  tech: "C#",
  imgPath: `${GH_BASE_URL}/csharp-colored.svg`,
};

export const JAVA: TechStack = {
  tech: "Java",
  imgPath: `${GH_BASE_URL}/java-colored.svg`,
};

export const KOTLIN: TechStack = {
  tech: "Kotlin",
  imgPath: `${GH_BASE_URL}/kotlin-colored.svg`,
};

export const SPRINGBOOT: TechStack = {
  tech: "Spring Boot",
  imgPath: `${VECTORLOGO_BASE_URL}/springio/springio-icon.svg`,
};

export const MICRONAUT: TechStack = {
  tech: "Micronaut",
  imgPath: MicronautLogo,
};

export const KAFKA: TechStack = {
  tech: "Kafka",
  imgPath: KafkaLogo,
};

export const DOCKER: TechStack = {
  tech: "Docker",
  imgPath: `${GH_BASE_URL}/docker-colored.svg`,
};

export const POSTGRES: TechStack = {
  tech: "Postgres",
  imgPath: `${GH_BASE_URL}/postgresql-colored.svg`,
};

export const MONGO: TechStack = {
  tech: "Mongo",
  imgPath: `${GH_BASE_URL}/mongodb-colored.svg`,
};

export const UNITY: TechStack = {
  tech: "Unity",
  imgPath: UnityLogo,
};

export const UNREAL_ENGINE: TechStack = {
  tech: "Unreal Engine",
  imgPath: UnrealEngineLogo,
};

export const VSCODE: TechStack = {
  tech: "Visual Studio Code",
  imgPath: VSCodeLogo,
};

export const INTELLIJ: TechStack = {
  tech: "IntelliJ",
  imgPath: IntelliJLogo,
};

export const VISUAL_STUDIO: TechStack = {
  tech: "Visual Studio",
  imgPath: VisualStudioLogo,
};

export const GIT: TechStack = {
  tech: "Git",
  imgPath: `${GH_BASE_URL}/git-colored.svg`,
};

export const JIRA: TechStack = {
  tech: "Jira",
  imgPath: JiraLogo,
};

export const INSOMNIA: TechStack = {
  tech: "Insomnia",
  imgPath: InsomniaLogo,
};

export const GITHUB: TechStack = {
  tech: "GitHub",
  imgPath: `${GH_SOCIALS_BASE_URL}/github-dark.svg`,
};

export const LINKEDIN: TechStack = {
  tech: "LinkedIn",
  imgPath: `${GH_SOCIALS_BASE_URL}/linkedin.svg`,
};

export const YOUTUBE: TechStack = {
  tech: "YouTube",
  imgPath: `${GH_SOCIALS_BASE_URL}/youtube.svg`,
};
