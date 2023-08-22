import style from "./content.module.css";
import About from "../about/About";
import Education from "../education/Education";
import Projects from "../projects/Projects";
import Title from "../title/Title";
import Skills from "../skills/Skills";
import Devider from "../../base/devider/Devider";

function Content() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Title />
        <Devider />
        <Skills />
        <Devider />
        <About />
        <Devider />
        <Education />
        <Devider />
        <Projects />
      </div>
    </main>
  );
}

export default Content;
