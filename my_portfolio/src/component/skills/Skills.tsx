import style from "./skills.module.css";
import skills from "../../constants/skills";
import Skill from "../../base/skill/Skill";

function Skills() {
  return (
    <div className={style.skills}>
      <h2>My skills:</h2>
      <ul>
        {skills.map((skill, index) => (
          <Skill name={skill} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;
