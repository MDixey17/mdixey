import {
  CPP,
  CS,
  CSS,
  DOCKER,
  GIT,
  GOLANG,
  HADOOP,
  HTML,
  INSOMNIA,
  INTELLIJ,
  JAVA,
  JAVASCRIPT,
  JIRA,
  KAFKA,
  KOTLIN,
  MICRONAUT,
  MONGO,
  POSTGRES,
  PYTHON,
  REACT,
  SCALA,
  SPARK,
  SPRINGBOOT,
  TYPESCRIPT,
  UNITY,
  UNREAL_ENGINE,
  VISUAL_STUDIO,
  VSCODE,
} from "../../constants/Tech";
import { TechIcon } from "../TechIcon/TechIcon";
import "./TechList.css";

export const TechList = () => {
  return (
    <div className="techlist-wrapper blue-bottom-border">
      <h1>My Technical Skills</h1>
      <div className="techlist-skills-wrapper">
        <div className="tech-skills-left-container">
          <p></p>
        </div>
        <div className="tech-skills-center-container">
          <TechIcon imgPath={TYPESCRIPT.imgPath} altText={TYPESCRIPT.tech} />
          <TechIcon imgPath={JAVASCRIPT.imgPath} altText={JAVASCRIPT.tech} />
          <TechIcon imgPath={HTML.imgPath} altText={HTML.tech} />
          <TechIcon imgPath={CSS.imgPath} altText={CSS.tech} />
          <TechIcon imgPath={REACT.imgPath} altText={REACT.tech} />
          <TechIcon imgPath={PYTHON.imgPath} altText={PYTHON.tech} />
          <TechIcon imgPath={GOLANG.imgPath} altText={GOLANG.tech} />
          <TechIcon imgPath={CPP.imgPath} altText={CPP.tech} />
          <TechIcon imgPath={CS.imgPath} altText={CS.tech} />
          <TechIcon imgPath={JAVA.imgPath} altText={JAVA.tech} />
          <TechIcon imgPath={KOTLIN.imgPath} altText={KOTLIN.tech} />
          <TechIcon imgPath={SCALA.imgPath} altText={SCALA.tech} />
          <TechIcon imgPath={SPRINGBOOT.imgPath} altText={SPRINGBOOT.tech} />
          <TechIcon imgPath={MICRONAUT.imgPath} altText={MICRONAUT.tech} />
          <TechIcon imgPath={KAFKA.imgPath} altText={KAFKA.tech} />
          <TechIcon imgPath={DOCKER.imgPath} altText={DOCKER.tech} />
          <TechIcon imgPath={POSTGRES.imgPath} altText={POSTGRES.tech} />
          <TechIcon imgPath={MONGO.imgPath} altText={MONGO.tech} />
          <TechIcon imgPath={SPARK.imgPath} altText={SPARK.tech} />
          <TechIcon imgPath={HADOOP.imgPath} altText={HADOOP.tech} />
          <TechIcon imgPath={UNITY.imgPath} altText={UNITY.tech} />
          <TechIcon
            imgPath={UNREAL_ENGINE.imgPath}
            altText={UNREAL_ENGINE.tech}
          />
          <TechIcon imgPath={VSCODE.imgPath} altText={VSCODE.tech} />
          <TechIcon imgPath={INTELLIJ.imgPath} altText={INTELLIJ.tech} />
          <TechIcon
            imgPath={VISUAL_STUDIO.imgPath}
            altText={VISUAL_STUDIO.tech}
          />
          <TechIcon imgPath={GIT.imgPath} altText={GIT.tech} />
          <TechIcon imgPath={JIRA.imgPath} altText={JIRA.tech} />
          <TechIcon imgPath={INSOMNIA.imgPath} altText={INSOMNIA.tech} />
        </div>
        <div className="tech-skills-right-container">
          <p></p>
        </div>
      </div>
    </div>
  );
};
