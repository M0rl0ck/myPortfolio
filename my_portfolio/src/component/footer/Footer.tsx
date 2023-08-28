import style from "./footer.module.css";
import NavContacts from "../../base/navContacts/NavContacts";

function footer() {
  return (
    <footer className={style.footer}>
      <div>SergeySergeev</div>
      <NavContacts />
    </footer>
  );
}

export default footer;
