import style from "./navigation.module.css";

interface INavigation {
  isOpen: boolean;
  cullback: () => void;
}

function Navigation({ isOpen, cullback }: INavigation) {
  const closeMenu = () => {
    if (isOpen) {
      cullback();
    }
  };
  return (
    <nav
      className={
        isOpen ? [style.navigation, style.active].join(" ") : style.navigation
      }
      onClick={closeMenu}
    >
      <ul>
        <li>
          <a href="#">My link1</a>
        </li>
        <li>
          <a href="#">My link2</a>
        </li>
        <li>
          <a href="#">My link3</a>
        </li>
        <li>
          <a href="#">My link4</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
