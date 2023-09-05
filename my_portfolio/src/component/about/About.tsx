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
        <p>I am a Front-end developer.</p>
        <p>
          I have knowledge of Wepback, Typescript/Javascript, React, Redux, CSS
          (SASS), NextJS.
        </p>
        <p>
          I am looking forward to working in teams as well as individually. I am
          not only willing to deepen my knowledge but I also want to apply them
          to the real products.
        </p>
      </div>
    </section>
  );
}

export default About;
