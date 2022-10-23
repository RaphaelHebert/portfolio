import { useState, useEffect } from "react";

import Spinner from "../../../components/Spinner";
import Intro from "../../../components/intro";
import projectsList from "../../../components/projectsList/projectsList";

import "../projects.css";
import "../../../app.css";
import "../../../components/projectsList/projectsList.css";

//images
import pipy from "./img/pypi.png";
import python from "./img/python.png";
import ncbi from "./img/ncbi.png";
import readTheDocs from "./img/readTheDoc.png";
import colab from "./img/colabgoogle.png";
import github from "./img/github.png";
import softwareX from "./img/softwareX.jpeg";

const images = [pipy, python, ncbi, readTheDocs, colab, github, softwareX];

const NSDPY = () => {
  // TODO: get the project name from url
  const [project, setProject] = useState([]);
  const [loaded, setLoaded] = useState({
    spinner: "flex colNoWarp justifyCenter",
    img: "displayNone",
  });

  useEffect(() => {
    setProject(projectsList.filter((project) => project.name === "NSDPY")[0]);
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
              return <img src={img} alt="logo" width="100px" />;
            })}
          </div>
          <section className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter alignContentStretch logos">
            <article className="flex colNoWrap justifySpaceEvenly">
              <p>
                Built with Python3 NSDPY aims to ease the work of the people who
                need to download big batches of DNA sequences such as biologists
                or geneticist.. It can automatize batch downloading from the
                NCBI databases and then filter and sort the downloaded sequences
                according to their taxonomy. /n NCBI is available on{" "}
                <a href="https://github.com/RaphaelHebert/nsdpy">GitHub</a> or
                can be installed as a package from the PyPI website to be used
                directly in the terminal and included in a pipeline. It is also
                available on Google Colab. The documentation is available on
                readTheDocs and the related paper is published on sofwareX
                magazine
              </p>
              <p>
                Links to NSDPY references and documentation:
                <ul>
                  <li>
                    <a href="https://authors.elsevier.com/sd/article/S235271102200036X">
                      NSDPY paper on SofwareX
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/RaphaelHebert/nsdpy">
                      GitHub repository
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ncbi.nlm.nih.gov/">NCBI</a>
                  </li>
                  <li>
                    <a href="https://pypi.org/project/nsdpy/">PyPI</a>
                  </li>
                  <li>
                    <a href="https://colab.research.google.com/drive/1UmxzRc_k5sNeQ2RPGe29nWR_1_0FRPkq">
                      Google Colab
                    </a>
                  </li>
                  <li>
                    <a href="https://nsdpy.readthedocs.io/en/latest/">
                      readTheDocs
                    </a>
                  </li>
                </ul>
              </p>
            </article>
            <aside className="flex colNoWrap justifyCenter">
              <h2>NSDPY workflow</h2>
              <div className={loaded.spinner}>
                <Spinner />
              </div>
              <img
                className={loaded.img}
                src="https://docs.google.com/drawings/d/e/2PACX-1vRD4h7l0S57op_4j-5xsz8iv1j1XBliw-jEdtnWOIq-JAU2l8kSV6d1NmkHd5Q4zhUmZCA3SHUSuHJw/pub?w=801&amp;h=744"
                alt="NSDPY workflow"
                onLoad={handleOnload}
              />
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

export default NSDPY;
