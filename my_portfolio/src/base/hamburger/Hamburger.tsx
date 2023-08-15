import style from "./hamburger.module.css";

interface IHamburgerProps {
  isOpen: boolean;
  cullback: () => void;
}

function Hamburger({ isOpen, cullback }: IHamburgerProps) {
  return (
    <div
      className={
        isOpen ? [style.hamburger, style.active].join(" ") : style.hamburger
      }
      onClick={cullback}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Hamburger;
