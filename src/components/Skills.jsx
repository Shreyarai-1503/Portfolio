import "bootstrap/dist/css/bootstrap.min.css";
import { skills } from "../data";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, path }, index) => {
        return (
          <div className="card skillsItem" key={index}>
            <img src={path} />
            <h5 className="skillsTitle">{title}</h5>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
