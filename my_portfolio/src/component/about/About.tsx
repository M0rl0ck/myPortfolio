import style from "./about.module.css";
import Contacts from "../../base/contacts/Contacts";
import VerticalDevider from "../../base/devider/VerticalDevider";

function About() {
  return (
    <section className={style.about}>
      <Contacts />
      <VerticalDevider />
      <div>
        <h2>About me:</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut
        quisquam culpa beatae eligendi fugit ullam quos dolores. Corrupti
        possimus soluta neque debitis corporis quo explicabo, provident maiores
        amet velit? Et voluptatum quae quisquam minima non quibusdam
        reprehenderit optio nesciunt! Est, saepe pariatur eligendi aut eveniet
        dolores animi illum! Ab atque fugiat in nisi consequatur aut delectus
        necessitatibus nesciunt et. Culpa, cupiditate saepe facere eligendi
        autem molestiae maxime porro
      </div>
    </section>
  );
}

export default About;
