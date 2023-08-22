import style from "./projectCard.module.css";
import IProject from "../../interfaces/IProject";
import Skill from "../skill/Skill";

interface IProjectCard {
  project: IProject;
}

function ProjectCard({ project }: IProjectCard) {
  const { image, name, description, stack, git, deploy } = project;
  return (
    <div className={style.cardContainer}>
      <p className={style.description}>{description}</p>
      <div className={style.imgContainer}>
        <img src={image} />
      </div>

      <h3>{name}</h3>

      <ul className={style.skillsContainer}>
        {stack.map((skill, index) => (
          <Skill name={skill} key={index} />
        ))}
      </ul>
      <div className={style.linkContainer}>
        <a href={git}>Git</a>
        <a href={deploy}>Deploy</a>
      </div>
    </div>
  );
}

export default ProjectCard;
