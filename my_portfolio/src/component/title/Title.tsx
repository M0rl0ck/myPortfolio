import Circle from "../../base/decoration/Circle/Circle";
import OvalDekcoration from "../../base/decoration/oval/OvalDekcoration";
import { FormattedMessage } from "react-intl";
import photo from "../../assets/photo.png";
import style from "./title.module.css";

function Title() {
  return (
    <div className={style.titleContainer}>
      <div className={style.titleHeader}>
        <div>
          <p>
            <FormattedMessage id="TITLE" />
          </p>
          <p>
            <FormattedMessage id="TITLE_NAME" />
          </p>
          <h1>Frontend developer</h1>
          <OvalDekcoration position={style.positionOval} />
        </div>
      </div>
      <div className={style.titlePhotoContainer}>
        <img className={style.titlePhoto} src={photo} alt="photo" />
        <Circle position={style.positionCircle} />
      </div>
    </div>
  );
}

export default Title;
