import { useState, useEffect } from "react";

import Intro from "../../../components/Intro/Intro";

import projectsList from "../../../constants/projectsList";
import LogoBar from "../../../components/LogoBar";
import "../projects.css";
import "../../../app.css";

const techStack = ["codepen", "javascript", "css3", "html5"];

const CodePen = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(projectsList.filter((project) => project.name === "CodePen")[0]);
  }, []);

  return (
    <>
      {project ? (
        <div className="flexColNoWrap main mainContainer">
          <Intro project={project} />
          <LogoBar techStack={techStack} />

          <div className="flex rowNoWrap justifyCenter">
            <a href="https://codepen.io/raphaelhebert-the-scripter">
              Visit my CodePen here{" "}
            </a>
          </div>
          <section className="flex colWrap justifyStretch alignItemsStretch alignContentCenter">
            <article className="flex colNoWrap justifyCenter codePenDisplay">
              <h2> Some practice of HTML5, CSS3 and JavaScript.. </h2>
              <iframe
                title="font-style"
                loading="lazy"
                src="https://codepen.io/raphaelhebert-the-scripter/embed/XWMrbOB?default-tab=html%2Cresult"
              />
            </article>
            <article className="flex colNoWrap justifyCenter codePenDisplay">
              <h2> Pure HTML5 and CSS3 can achieve a lot </h2>
              <iframe
                width="100%"
                title="CSSstopwatch"
                loading="lazy"
                src="https://codepen.io/raphaelhebert-the-scripter/embed/XWpLJZe?default-tab=html%2Cresult"
              />
            </article>
            <article className="flex colNoWrap justifyCenter codePenDisplay">
              <h2> Press the arrow keys to make the man move! </h2>
              <iframe
                width="100%"
                title="ManJumps"
                loading="lazy"
                src="https://codepen.io/raphaelhebert-the-scripter/embed/vYxGWrR?default-tab=html%2Cresult"
              />
            </article>
          </section>
        </div>
      ) : (
        // TODO: put a spinner
        <p>Loading project...</p>
      )}
    </>
  );
};
export default CodePen;
