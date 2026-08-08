import cls from "./ProjectCard.module.css";
import arrow from "../../assets/images/arrow.svg";
import github from "../../assets/images/github-icon.svg";
import type { Project } from "../../types/types";
import placeholder from '../../assets/images/folder-icon.svg';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={cls.card}>
      <div className={cls["card-image"]}>
        <p className={cls.title}>{project.title}</p>
        <img src={project.image} alt="project image" className={cls.image} />
      </div>
      <div className={cls["card-description"]}>
        <p className={cls["description-title"]}>{project.title}</p>
        <p className={cls["description-details"]}>{project.description}</p>
        <ul className={cls["project-info"]}>
          <p>Стек: </p>
          {project.stack.map((item) => (
            <li className={cls["stack-item"]}>
              <img src={item.icon || placeholder} alt="icon" className={cls["stack-icon"]} />
              {item.value}
            </li>
          ))}
        </ul>
        <div className={cls.links}>
          <a href={project.demo} className={cls.link} target="_blank">
            <span>LIVE DEMO</span>
            <img src={arrow} alt="arrow" className={cls.arrow} />
          </a>
          <a href={project.github} className={cls.link} target="_blank">
            <span>SEE ON GITHUB</span>
            <img src={github} alt="github" className={cls.github} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
