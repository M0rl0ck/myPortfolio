import Oval from "./oval";
import style from "./oval.module.css";

interface IOvalDecoration {
  position: string;
}

function OvalDekcoration({ position }: IOvalDecoration) {
  return (
    <div className={style.ovalDekcoration + " " + position}>
      <Oval ovalClass={style.firstOval} />
      <Oval ovalClass={style.secondOval} />
    </div>
  );
}

export default OvalDekcoration;
