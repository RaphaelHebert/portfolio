import { useState, useEffect } from "react";

import projectsList from "../../../components/projectsList/projectsList";
import "../projects.css";
import "../../../app.css";

import Intro from "../../../components/intro";
import ird from "./img/logos/ird.png";
import danangUniversity from "./img/logos/danangUniversity.png";
import avgLength from "./img/tamGiangAvgLength.png";
import histogram from "./img/tamGiangHistogram.png";
import frequencie from "./img/tamGiangLengthFrequencies.png";
import distribution from "./img/tamGiangSizeClassFrequencies.png";

const r =
  "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white";
const colab =
  "https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=googlecolab&color=525252";
const python =
  "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue";
const ubuntu =
  "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white";
const images = [ird, danangUniversity, r, colab, python, ubuntu];

const displays = [avgLength, histogram, frequencie, distribution];

const TamGiang = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(
      projectsList.filter((project) => project.name === "TamGiang")[0]
    );
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
            <div className="TamGiang">
              <p>
                This project was was part of the COMPOSE project that resulted
                and is the result of a partnership between the IRD &#40;Institut
                de Recherche pour le Developpement&#41; and Danang university of
                technology. Data analysis plays a central role in environmental
                sciences. Statistics has a central role in most research fields
                and environmental sciences are not exception to that. <br />
              </p>
              <p>
                {" "}
                Links and references:
                <ul className="flex rwoWrap">
                  <li>
                    {" "}
                    <a href="https://colab.research.google.com/drive/11wadYnU2DAV5y3gLCjAtFfE4f5IojN4W?usp=sharing">
                      Google Colab Notebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ird.fr/vietnam/projets">
                      IRD in Vietnam
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/composeproject">
                      COMPOSE project on Facebook{" "}
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignItemsStart">
            <article>
              Exploratory statistics describe the characteristics of the
              dataset. But as datasets get bigger and more complex data
              visualization helps us to picture a global and intuitive
              representation of their parameters of interest. A good data
              representation must be self-explanatory as it should help us to
              get an insight on the structure of the data and eventually
              formulate hypothesis.
            </article>
            <aside className="flex colNoWrap">
              <div className="asideImages">
                <img
                  loading="lazy"
                  src={avgLength}
                  alt="distribution curve"
                  width="100%"
                />
              </div>
            </aside>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignItemsStart">
            <aside className="flex colNoWrap">
              <div className="asideImages">
                <img
                  loading="lazy"
                  src={frequencie}
                  alt="distribution curve"
                  width="100%"
                />
              </div>
            </aside>
            <article>
              Once an hypothesis is formulated, it needs to be tested. The
              choice of the correct test depends on the nature of the data and
              the size of the dataset. As well a confidence level needs to be
              decided before the test.
            </article>
          </section>
          <section className="flex rowWrap justifySpaceEvenly alignItemsStart">
            <article>
              Nowadays languages like R and python have libraries or even native
              function to run these tests and compute the p-value. The p-value
              will let us decide wether to reject an hypothesis or to accept it.
              A typical use case of these statistical tests is, for example, to
              compare data coming from different sampling sites and decide
              wether or not the differences between these sampling site are
              significative or not. To know if the different comes from the
              randomness of the sampling or not so to speak.
            </article>
            <aside className="flex colNoWrap">
              <div className="asideImages">
                <img
                  loading="lazy"
                  src={distribution}
                  alt="distribution curve"
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
export default TamGiang;
