import { useState, useEffect } from "react";

//local imports
import Spinner from "../../../components/Spinner";
import Intro from "../../../components/intro";
import projectsList from "../../../components/projectsList/projectsList";
import "../projects.css";
import "../../../app.css";
import "../../../components/projectsList/projectsList.css";
import Projects from "../../../components/projectsList";
import { logos } from "../../../constants";

//images
const techStack = [
  "React",
  "Node",
  "Firebase",
  "TS",
  "MUI",
  "Notion",
  "Redux",
  "Saga",
  "Bitbucket",
];

const Kagyoaid = () => {
  // TODO: get the project name from url
  const [project, setProject] = useState([]);
  // TODO: see the use of lazy
  const [loaded, setLoaded] = useState({
    spinner: "flex colNoWarp justifyCenter",
    img: "displayNone",
  });

  useEffect(() => {
    setProject(
      projectsList.filter((project) => project.name === "Kagyoaid")[0]
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
          <div className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter logos">
            {techStack.map(
              (item) =>
                logos[item].imgLink &&
                logos[item].name && (
                  <img
                    src={logos[item].imgLink}
                    alt={`${logos[item].name} logo`}
                    width="8%"
                  />
                )
            )}
          </div>
          <section className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter alignContentStretch logos">
            <article className="flex colNoWrap justifySpaceEvenly">
              <p>A twitter like Social Media Network</p>
              <p>Small team, outsourced for our client</p>
              <p>
                Links to the {project.name} website and repository:
                <ul>
                  <li>
                    <a href={project.link}>the website</a>
                  </li>
                  {project.github && (
                    <li>
                      <a href={project.github}>my GitHub fork</a>
                    </li>
                  )}
                </ul>
              </p>
            </article>
            <aside className="flex colNoWrap justifyCenter">
              <h2>{project.name} website</h2>
              <div className={loaded.spinner}>
                <Spinner />
              </div>
              <a
                href={project.link}
                style={{ background: "white", padding: ".5em" }}
              >
                <img
                  className={loaded.img}
                  src={project.img}
                  alt={`${project.name} website`}
                  onLoad={handleOnload}
                  width="100%"
                />{" "}
              </a>
            </aside>
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Kagyoaid;
