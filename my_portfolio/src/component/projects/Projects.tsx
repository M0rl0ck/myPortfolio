import style from "./projects.module.css";
import PROJECTS from "../../constants/projects";
import ProjectCard from "../../base/ProjectCard/ProjectCard";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

function Projects() {
  const [openDescriptionIndex, setOpenDescriptionIndex] = useState(-1);
  return (
    <section>
      <h2>
        <FormattedMessage id="PROJECTS" />
      </h2>
      <div className={style.projectsContainer}>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            project={project}
            openDescriptionIndex={openDescriptionIndex}
            index={index}
            setOpenDescriptionIndex={setOpenDescriptionIndex}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
