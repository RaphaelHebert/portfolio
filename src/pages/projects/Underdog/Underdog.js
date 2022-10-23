import { useState, useEffect } from "react";

// local imports
import { Spinner, Intro, LogoBar } from "../../../components";
import { projectsList } from "../../../constants";

// css imports
import "../projects.css";
import "../../../app.css";
import "../../../components/projectsList/projectsList.css";

// images
import underdogdevWebsite from "./img/underdogdevWebsite.png";

const techStack = ["React", "Node", "Okta", "Antd", "Slack", "Trello"];

const Underdog = () => {
  // TODO: get the project name from url
  const [project, setProject] = useState([]);
  const [loaded, setLoaded] = useState({
    spinner: "flex colNoWarp justifyCenter",
    img: "displayNone",
  });

  useEffect(() => {
    setProject(
      projectsList.filter((project) => project.name === "Underdogdevs")[0]
    );
  }, []);

  const handleOnload = () => {
    setLoaded({ spinner: "displayNone", img: "displayBlock" });
  };

  return (
    <>
      {project ? (
        <div className="flexColNoWrap main mainContainer">
          <Intro project={project} />
          <LogoBar techStack={techStack} />
          <section className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter alignContentStretch logos">
            <article className="flex colNoWrap justifySpaceEvenly">
              <p>
                The final team project for the Bloom Institute of Technology Web
                development bootcamp. I realized some forms for signing up and
                logging with Antd and implemented the authentification front-end
                with Okta.
              </p>
              <p>We worked as a team using Slack, Trello and GitHub</p>
              <p>
                Links to the Underdogdevs website and repository:
                <ul>
                  <li>
                    <a href={project.link}>the website</a>
                  </li>
                  <li>
                    <a href={project.github}>my GitHub fork</a>
                  </li>
                </ul>
              </p>
            </article>
            <aside className="flex colNoWrap justifyCenter">
              <h2>Underdogdevs website</h2>
              <div className={loaded.spinner}>
                <Spinner />
              </div>
              <a href={project.link}>
                <img
                  className={loaded.img}
                  src={underdogdevWebsite}
                  alt="Underdogdevs website"
                  onLoad={handleOnload}
                  width="100%"
                />{" "}
              </a>
            </aside>
          </section>
        </div>
      ) : (
        // TODO: put a spinner
        <Spinner />
      )}
    </>
  );
};

export default Underdog;
