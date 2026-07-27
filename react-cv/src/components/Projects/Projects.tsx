import { ProjectCard } from '../ProjectCard';
import cls from './Projects.module.css';
import {projects} from '../../data/projects';

const Projects = () => {
  return (
  <section className={cls.projects}>
    <div className={`section cls['projects-wrapper']`}>
      <h2 className={cls['projects-title']}>МОИ ПРОЕКТЫ</h2>
      <p className={cls['projects-subtitle']}>Здесь можно увидеть с какими технологиями я работала</p>
      {projects.map((project) => <ProjectCard project={project}/>)}
    </div>
  </section>
  )
}

export default Projects;