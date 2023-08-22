import style from "./skill.module.css";

interface ISkill {
  name: string;
}

function Skill({ name }: ISkill) {
  return <li className={style.skill}>{name}</li>;
}

export default Skill;
