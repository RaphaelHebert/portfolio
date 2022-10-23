import { useState, useEffect } from "react";
import "../projects.css";
import "../../../app.css";

import projectsList from "../../../components/projectsList/projectsList";
import Intro from "../../../components/intro";

import bootstrapComponent from "./img/promission-bootstrap.png";
import contact from "./img/promission-contact.png";
import login from "./img/promission-login.png";
import newTask from "./img/promission-newTask.png";
import overview from "./img/promission-overview.png";
import profiles from "./img/promission-profiles.png";
import publishAdd from "./img/promission-publishAdd.png";
import seeAdds from "./img/promission-seeAdds.png";

const python =
  "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white";
const flask =
  "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white";
const mysql =
  "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white";
const bootstrap =
  "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white";
const html =
  "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
const css =
  "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";
const heroku =
  "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white";

const images = [python, flask, mysql, bootstrap, html, css, heroku];

const Flask = () => {
  // TODO: get the project name from url
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(projectsList.filter((project) => project.name === "Flask")[0]);
  }, []);

  return (
    <>
      {project ? (
        <div className="flexColNoWrap main mainContainer">
          <Intro project={project} />
          <div className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter logos">
            {images.map((img) => {
              return <img src={img} alt="logo" width="100px" />;
            })}
          </div>
          <section>
            <p>
              Links and references to the project:
              <ul>
                <li>
                  <a href={project.link}>Promission website </a>
                  <span>
                    {" "}
                    &#40; you can use the credentials: <b>anymail@gmail.com</b>,
                    password: <b>freepass</b> for a visit&#41;
                  </span>
                </li>
                <li>
                  <a href={project.github}>GitHub repository</a>
                </li>
              </ul>
            </p>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter logos">
            <article>{project.description}</article>
            <aside>
              <div className="asideImages">
                <img
                  loading="lazy"
                  src={overview}
                  alt="promission overview"
                  width="100%"
                />
              </div>
            </aside>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignItemsStart">
            <article>
              As every modern websites HTML5, CSS3 and JavaScript are used for
              front-end. The Bootstrap library is used to leverage the work of
              other programmers and easily get nice components like menus,
              buttons and classes to make the website neat and responsive. As a
              Flask website the back-end uses Jinja2 to render HTML in the
              front-end. Jinja2 is a templating language used by python
              developers. It looks a lot like HTML but can parse some logic
              &#40;for example looping over an array of text to render it as if
              you would a typed it in HTML&#41;.
            </article>
            <aside>
              <div className="asideImages">
                <img
                  loading="lazy"
                  src={bootstrapComponent}
                  alt="promission bootstrap"
                  width="100%"
                />
              </div>
            </aside>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignItemsStart">
            <article>
              <p>
                Saving your work and information online is a great feature of
                modern life. It allows you to access your work from anywhere,
                remember that you already signup on a website and much more.
                From a users point of view it needs to be intuitive and straight
                forward. But under the hood allowing such is a piece of work.
                SQL databases is great way to store and manage information. SQL
                is great language to query databases and quickly retrieve only
                the information you need. This website uses the Heroku Postgres
                tool to manage a SQL database. As well thanks to the python cs50
                library that made the requests to the database easier.
              </p>
              <p>
                Promission uses SQL database to let the user sign up, remember
                his profile, publish adds, and check the adds and profiles of
                other users sorted by different criteria such as location, wage,
                rating..
              </p>
            </article>
            <aside>
              <div className="asideImages">
                <img
                  loading="lazy"
                  src={newTask}
                  alt="promission bootstrap"
                  width="100%"
                />
              </div>
            </aside>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignItemsStart">
            <article>
              Internet is probably the most efficient tool to connect people
              together. The adds section is one of Promission's main feature. It
              lets the user publish adds and consulting adds from other users.
              As well the user can go the a user's profile by a simple click on
              an their username appearing on their add. The adds can be sorted
              by date, location, rate.. so users can quickly find what they are
              looking for.
            </article>
            <aside>
              <div className="asideImages viewportHeight flex rowNoWrap justifyStretch justifyItemsCenter alignItemsStretch">
                <img src={seeAdds} alt="promission bootstrap" width="100%" />
              </div>
            </aside>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignItemsStart">
            <article>
              <p>
                The idea of Promission is not new, but it does not have to be
                new to make a product that will be useful for a specific group a
                people. It is a kind a market place connecting schools, private
                centers and agents to English teachers. To be efficient it needs
                to keep things simple while providing the essentials. Promission
                give the possibility to find teacher by checking the profiles,
                to send them a request for contact &#40;as teachers don't want
                their contact information to be displayed to anyone &#41;, and
                leave a rating on their profile. And teachers can leave a rating
                to their employers too.
              </p>
              <p>
                A school generally have many teachers to manage and sometimes
                teachers can work for many schools or private centers.
                Promission let them share their calendar together so it makes it
                easy see who is available at a specific time. This calendar was
                implemented by hand using SQL on back-end. It was a great way to
                learn SQL and SQL database structure and management. Thought a
                lot of libraries can be used to implement a calendar properly
                doing it by hand was a great way to learn.
              </p>
            </article>
            <aside>
              <div className="asideImages viewportHeight flex rowNoWrap justifyStretch justifyItemsCenter alignItemsStretch">
                <img src={publishAdd} alt="promission bootstrap" width="100%" />
              </div>
            </aside>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignItemsStart">
            <article>
              Sign-up and logins, database management... here's some big pieces
              of security concerns dealing with sensitive informations. To make
              things some libraries had to be used. The cs50 library took care
              of sanitizing the database to avoid SQL injection attacks.
              Werkzeug libraries are use to manage and hash passwords
              &#40;typicalli something we don't want to writ ourselves if we
              want a website running by the century&#41;
            </article>
            <aside className="flex colNoWrap">
              <div className="asideImages">
                <img
                  loading="lazy"
                  src={login}
                  alt="promission bootstrap"
                  width="100%"
                />
              </div>
            </aside>
          </section>
        </div>
      ) : (
        // TODO: put a spinner
        <p>Loading project...</p>
      )}
    </>
  );
};

export default Flask;
