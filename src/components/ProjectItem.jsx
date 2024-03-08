import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectItem = ({ img, title, details, link }) => {
  const [model, setModel] = useState(false);

  const toogleModel = () => {
    setModel(!model);
  };
  return (
    <div className="projectItem">
      <img src={img} className="projectImg" />

      <div className="projectHover" onClick={toogleModel}>
        <h3 className="projectTitle">{title}</h3>
      </div>

      {model && (
        <div className="projectModel">
          <div className="projectModel-content">
            <MdOutlineCancel className="modelClose" onClick={toogleModel} />

            <h3 className="modelTitle">{title}</h3>

            <ul className="modelList grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modelItem" key={index}>
                    <span className="itemIcon">{icon}</span>

                    <div>
                      <span className="itemTitle">{title}</span>
                      <span className="itemDetails">
                        {title === "Preview : " ? (
                          <Link
                            to={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {desc}
                          </Link>
                        ) : (
                          desc
                        )}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} className="modelImg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
