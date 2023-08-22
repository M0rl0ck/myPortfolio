import style from "./projects.module.css";
import PROJECTS from "../../constants/projects";
import ProjectCard from "../../base/ProjectCard/ProjectCard";

function Projects() {
  return (
    <section>
      <h2>My projects</h2>
      <div className={style.projectsContainer}>
        {PROJECTS.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
