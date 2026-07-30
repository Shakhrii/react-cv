import { ProjectCard } from '../ProjectCard';
import cls from './Projects.module.css';
import {projects} from '../../data/projects';

const Projects = () => {
  return (
  <section className={cls.projects}>
    <div className={`section cls['projects-wrapper']`}>
      <h2 className={cls['projects-title']}>МОИ ПРОЕКТЫ</h2>
      <p className={cls['projects-subtitle']}>Здесь можно увидеть с какими технологиями я работала</p>
      <ul className={cls.projects}>
        {projects.map((project) => 
          <li key={project.id} className={cls.item}>
            <ProjectCard project={project}/>
          </li>)
        }
      </ul>
    </div>
  </section>
  )
}

export default Projects;