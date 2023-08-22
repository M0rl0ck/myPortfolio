import Circle from "../../base/decoration/Circle/Circle";
import OvalDekcoration from "../../base/decoration/oval/OvalDekcoration";
import style from "./title.module.css";

function Title() {
  return (
    <div className={style.titleContainer}>
      <div className={style.titleHeader}>
        <div>
          <p>Nice to meet you!</p>
          <p>I'm Sergey Sergeev.</p>
          <h1>Frontend developer</h1>
          <OvalDekcoration position={style.positionOval} />
        </div>
      </div>
      <div className={style.titlePhotoContainer}>
        <img className={style.titlePhoto} src="#" alt="photo" />
        <Circle position={style.positionCircle} />
      </div>
    </div>
  );
}

export default Title;
