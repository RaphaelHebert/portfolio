import { useState, useEffect } from "react";

import Spinner from "../../Spinner";
import Intro from "../../intro";
import projectsList from "../../projectsList/projectsList";
import "../projects.css";
import "../../../app.css";
import "../../projectsList/projectsList.css";
import Projects from "../../projectsList";

//images
const html5 =
  "https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg";
const css3 =
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg";
const JS =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
const TS =
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
const React =
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
const Node =
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg";
const MUI =
  "https://upload.wikimedia.org/wikipedia/commons/d/dc/Logo_material_design.svg";
const slack =
  "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg";
const Notion =
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg";
const firebase =
  "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg";
const redux =
  "https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png";
const saga = "https://cdn.worldvectorlogo.com/logos/redux-saga.svg";
const bitbucket =
  "https://upload.wikimedia.org/wikipedia/commons/3/32/Atlassian_Bitbucket_Logo.png";
// TODO : make the page the Kagyoaid page

const images = [React, Node, firebase, TS, MUI, Notion, redux, saga, bitbucket];

const Kagyoaid = () => {
  // TODO: get the project name from url
  const [project, setProject] = useState([]);
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
            {images.map((img) => {
              return <img src={img} alt="logo" width="8%" />;
            })}
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
