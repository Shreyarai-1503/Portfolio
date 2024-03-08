import { project } from "../../data";
import ProjectItem from "../../components/ProjectItem";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects section">
      <h2 className="sectionTitle">
        My <span>Projects</span>
      </h2>

      <div className="projectContainer container grid">
        {project.map((item) => {
          return <ProjectItem key={item.id} {...item} />
        })}
      </div>
    </section>
    
  );
};

export default Projects;
