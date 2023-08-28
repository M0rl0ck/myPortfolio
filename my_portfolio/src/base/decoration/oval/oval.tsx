import style from "./oval.module.css";

interface IOval {
  ovalClass: string;
}

function Oval({ ovalClass }: IOval) {
  return <div className={style.oval + " " + ovalClass}></div>;
}

export default Oval;
