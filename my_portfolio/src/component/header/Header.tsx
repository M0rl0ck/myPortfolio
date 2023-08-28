import style from "./header.module.css";
import NavContacts from "../../base/navContacts/NavContacts";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div>SergeySergeev</div>
        <NavContacts />
      </header>
    </>
  );
}

export default Header;
