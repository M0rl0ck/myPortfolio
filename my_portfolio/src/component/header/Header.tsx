import style from "./header.module.css";
import NavContacts from "../../base/navContacts/NavContacts";
import { FormattedMessage } from "react-intl";

interface IHeader {
  callback: () => void;
}

function Header({ callback: callback }: IHeader) {
  return (
    <>
      <header className={style.header}>
        <div>SergeySergeev</div>
        <NavContacts />
        <button className={style.btnLang} id="changeLang" onClick={callback}>
          <FormattedMessage id="BUTTONLANG" />
        </button>
      </header>
    </>
  );
}

export default Header;
