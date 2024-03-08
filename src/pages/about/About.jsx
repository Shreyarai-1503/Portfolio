import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Resume.pdf";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import "./about.css";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="sectionTitle">
          About <span>Me</span>
        </h2>

        <div className="aboutContainer grid">
          <div className="aboutInfo">
            <h3 className="sectionSubtitle">Personal Informations</h3>

            <ul className="infoList grid"><Info /></ul>

            <a href={CV} download='' className="button">Download Cv <span className="buttonIcon"><FaDownload /></span></a>
          </div>
          <div className="stats grid"><Stats /></div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="sectionSubtitle centre">My Skills</h3>
        <div className="skillsContainer grid"><Skills/></div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="sectionSubtitle centre">Education</h3>
        <div className="resumeContainer grid">
          <div className="resumeData">
            {resume.map((val) => {
              if(val.category === 'education') {
                return <ResumeItem key={val.id} {...val}/>
              } 
            })}
          </div>

          <div className="resumeData">
            {resume.map((val) => {
              if(val.category === 'experience') {
                return <ResumeItem key={val.id} {...val}/>
              } 
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
