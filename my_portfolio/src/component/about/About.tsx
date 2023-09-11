import style from "./about.module.css";
import Contacts from "../../base/contacts/Contacts";
import VerticalDevider from "../../base/devider/VerticalDevider";
import { FormattedMessage } from "react-intl";

function About() {
  return (
    <section className={style.about}>
      <Contacts />
      <VerticalDevider />
      <div>
        <h2>
          <FormattedMessage id="ABOUT" />
        </h2>
        <p>
          <FormattedMessage id="IM" /> Front-end developer.
        </p>
        <p>
          <FormattedMessage id="ABOUT_KNOW" /> Wepback, Typescript/Javascript,
          React, Redux, CSS (SASS), NextJS.
        </p>
        <p>
          <FormattedMessage id="ABOUT_MESSAGE" />
        </p>
      </div>
    </section>
  );
}

export default About;
