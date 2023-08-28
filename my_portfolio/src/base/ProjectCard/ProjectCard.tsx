import style from "./projectCard.module.css";
import IProject from "../../interfaces/IProject";
import Skill from "../skill/Skill";

interface IProjectCard {
  project: IProject;
  openDescriptionIndex: number;
  index: number;
  setOpenDescriptionIndex: (n: number) => void;
}

function ProjectCard({
  project,
  openDescriptionIndex,
  index,
  setOpenDescriptionIndex,
}: IProjectCard) {
  const { image, name, description, stack, git, deploy } = project;

  const openDescription = () => {
    if (openDescriptionIndex === index) {
      setOpenDescriptionIndex(-1);
    } else {
      setOpenDescriptionIndex(index);
    }
  };

  const stopProp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className={style.cardContainer} onClick={openDescription}>
      <p
        className={
          openDescriptionIndex === index
            ? style.description + " " + style.openDescription
            : style.description
        }
      >
        {description}
      </p>
      <div className={style.imgContainer}>
        <img src={image} />
      </div>

      <h3>{name}</h3>

      <ul className={style.skillsContainer}>
        {stack.map((skill, index) => (
          <Skill name={skill} key={index} />
        ))}
      </ul>
      <div className={style.linkContainer} onClick={stopProp}>
        <a href={git}>Git</a>
        <a href={deploy}>Deploy</a>
      </div>
    </div>
  );
}

export default ProjectCard;
