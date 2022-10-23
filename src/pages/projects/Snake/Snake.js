import { useState, useEffect } from "react";

import Spinner from "../../../components/Spinner";
import Intro from "../../../components/intro";
import projectsList from "../../../components/projectsList/projectsList";
import "../projects.css";
import "../../../app.css";
import "../../../components/projectsList/projectsList.css";

//images
import snake from "./img/snake.png";
import topTen from "./img/topTen.png";
import signIn from "./img/signIn.png";

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
const SQLite3 =
  "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg";

const images = [html5, css3, JS, React, Node, SQLite3];

const Snake = () => {
  // TODO: get the project name from url
  const [project, setProject] = useState([]);
  const [loaded, setLoaded] = useState({
    spinner: "flex colNoWarp justifyCenter",
    img: "displayNone",
  });

  useEffect(() => {
    setProject(projectsList.filter((project) => project.name === "Snake")[0]);
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
                Built with React, CSS3 and HTML5 for the front-end and Node.js
                and SQLite3 for the back-end this little single page application
                lets you play this classic game, sign up and create an account
                to register your scores online and compete with the other
                players.
              </p>
              <p>
                Links to the Snake references and documentation:
                <ul>
                  <li>
                    <a href={project.link}>the website</a>: Play the snake!
                  </li>
                  <li>
                    <a href={project.github}>GitHub front-end repository</a>: JS
                    and React
                  </li>
                  <li>
                    <a href="https://github.com/RaphaelHebert/gamesAPI">
                      GitHub back-end repository
                    </a>
                    : Node.js and SQL database
                  </li>
                </ul>
              </p>
            </article>
            <aside className="flex colNoWrap justifyCenter">
              <h2>The Snake overview</h2>
              <div className={loaded.spinner}>
                <Spinner />
              </div>
              <a href={project.link}>
                <img
                  className={loaded.img}
                  src={snake}
                  alt="snake playground"
                  onLoad={handleOnload}
                  width="100%"
                />
              </a>
            </aside>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter alignContentStretch logos">
            <article className="flex colNoWrap justifySpaceEvenly">
              <p>
                Deployed on Heroku the postgresSQL database allow the users to
                compete with each others and to keep trace of their previous
                game taking the snake to a new level. The API is made with the
                mighty Express library that greatly simplify the work of
                developers and allows to implement middlwares to improve
                security and user experience. As well, may third party library
                are available and ready to be plugged directly as middleware.
                Here we used some of the most commons like cors and helmet.
              </p>
            </article>
            <aside className="flex colNoWrap justifyCenter">
              <div className={loaded.spinner}>
                <Spinner />
              </div>
              <a href="https://snake-black.vercel.app/Scores">
                <img
                  className={loaded.img}
                  src={topTen}
                  alt="snake top ten"
                  onLoad={handleOnload}
                  width="100%"
                />
              </a>
            </aside>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter alignContentStretch logos">
            <article className="flex colNoWrap justifySpaceEvenly">
              <p>
                The app allows user to creat an account in order to save their
                game history and try to appear in the top ten players. The
                authentication is achieved securely using JSON Web Token and the
                users details are kept safe in the database mainly thanks to
                bcrypt package.
              </p>
            </article>
            <aside className="flex colNoWrap justifyCenter">
              <div className={loaded.spinner}>
                <Spinner />
              </div>
              <a href="https://snake-black.vercel.app/SignIn">
                <img
                  className={loaded.img}
                  src={signIn}
                  alt="snake sign in form"
                  onLoad={handleOnload}
                  width="100%"
                />
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

export default Snake;
