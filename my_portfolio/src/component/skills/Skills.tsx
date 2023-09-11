import style from "./skills.module.css";
import skills from "../../constants/skills";
import Skill from "../../base/skill/Skill";
import { FormattedMessage } from "react-intl";

function Skills() {
  return (
    <div className={style.skills}>
      <h2>
        <FormattedMessage id="SKILLS" />
      </h2>
      <ul>
        {skills.map((skill, index) => (
          <Skill name={skill} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;
