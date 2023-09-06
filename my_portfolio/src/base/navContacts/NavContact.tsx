import style from "./navContacts.module.css";
import { Tooltip } from "react-tooltip";

interface INavContact {
  link: string;
  icon: string;
  name: string;
}

function NavContact({ link, icon, name }: INavContact) {
  return (
    <>
      <li>
        <a href={link} id={name}>
          <img className={style.icon} src={icon} alt={name} />
        </a>
      </li>
      <Tooltip
        anchorSelect={`#${name}`}
        content={name}
        place="top"
        delayShow={600}
        delayHide={200}
      />
    </>
  );
}

export default NavContact;
