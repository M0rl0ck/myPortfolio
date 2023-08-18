import { useState } from "react";
import Hamburger from "../../base/hamburger/Hamburger";
import style from "./header.module.css";
import Navigation from "../../base/navigation/Navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={style.header}>
        <Hamburger isOpen={isOpen} cullback={openMenu} />
        <Navigation isOpen={isOpen} cullback={openMenu} />
      </header>
    </>
  );
}

export default Header;
