import { useState, useEffect } from "react";

import Spinner from "../../Spinner";
import Intro from "../../intro";
import projectsList from "../../projectsList/projectsList";
import "../projects.css";
import "../../../app.css";
import "../../projectsList/projectsList.css";
import underdogdevWebsite from "./img/underdogdevWebsite.png";

//images
const html5 =
  "https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg";
const css3 =
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg";
const JS =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
const React =
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
const Node =
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg";
const underdog = "https://www.underdogdevs.org/images/underdogdevs-03.png";
const okta =
  "https://upload.wikimedia.org/wikipedia/commons/5/5c/Okta_logo.svg";
const antd =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";
const trello =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg";
const slack =
  "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg";

// TODO : make the page the Kagyoaid page

const images = [React, Node, okta, antd, slack, trello];

const Kagyoaid = () => {
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
          <div className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter logos">
            {images.map((img) => {
              return <img src={img} alt="logo" width="8%" />;
            })}
          </div>
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

export default Kagyoaid;
