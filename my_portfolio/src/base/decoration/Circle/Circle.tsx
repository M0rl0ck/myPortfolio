import style from "./circle.module.css";

interface ICircle {
  position: string;
}

function Circle({ position }: ICircle) {
  return <div className={style.circle + " " + position}></div>;
}

export default Circle;
