import Cover from "./Cover";
import { projectsList } from "../../constants";
import { Intro, ProjectsList } from "..";

import "./landing.css";
import "../../app.css";

const Landing = ({ firstVisit, setFirstVisit }) => {
  const project = projectsList.filter(
    (project) => project.name === "Limitless possibilities"
  )[0];

  return (
    <>
      {firstVisit && <Cover setFirstVisit={setFirstVisit} />}
      <div className="flex colNoWrap main">
        <Intro project={project} />
        <ProjectsList />
      </div>
    </>
  );
};

export default Landing;
