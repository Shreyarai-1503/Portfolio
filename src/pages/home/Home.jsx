import Profile from "../../assets/home-img.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} className="homeImg" />

      <div className="homeContent">
        <div className="homeData">
          <h1 className="homeTitle">
            <span className="name">I'm Shreya Rai.</span> <br />
            <h1 className="animation">Software Developer</h1>
          </h1>

          <p className="homeDesciption">
            Enthusiastic and innovative developer with a strong foundation in
            coding and a passion for problem-solving, ready to bring fresh
            perspectives to the ever-evolving world of Web development.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="buttonIcon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="colorBlock"></div>
    </section>
  );
};

export default Home;
