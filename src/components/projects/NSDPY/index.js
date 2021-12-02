import { useState, useEffect } from "react";

import projectsList from "../../projectsList/projectsList";
import "../projects.css";

//images
import pipy from './img/pypi.png';
import python from './img/python.png';
import ncbi from './img/ncbi.png';
import readTheDocs from './img/readTheDoc.png';
import colab from './img/colabgoogle.png';
import github from './img/github.png';
import softwareX from './img/softwareX.jpeg'


const images = [
    pipy,
    python,
    ncbi,
    readTheDocs, 
    colab,
    github,
    softwareX
]



const NSDPY = () => {

    // TODO: get the project name from url 
    const [project, setProject] = useState([])

    useEffect( () => {
        setProject(projectsList.filter(project => project.name === "NSDPY")[0])
    }, [])

    return(
        <>
        {
            project?
            <>
                <div className="logos">
                    <h1>{project.name}</h1>
                    <p>Nucleotides Sequences Downloader with Python</p>
                </div>
                <div className="logos">
                    {images.map( img => {
                        return(
                            <img src={img} alt="logo" width="100px"/>
                        )            
                    })}
                </div>
                <section className="logos">
                    <article>
                        My first "professional" achievement with Python3... I wrote this script during a voluntary internship. 
                        NSDPY aims to ease the work of people who need to download big batches of DNA sequences such as biologists or geneticist..
                        It can automatize batch downloading from the <a href="https://www.ncbi.nlm.nih.gov/" >NCBI</a> databases and then filter 
                        and sort the downloaded sequences according to their taxonomy. /n NCBI is available on <a href="https://github.com/RaphaelHebert/nsdpy">GitHub</a> or can be installed as a package
                        from the <a href="https://pypi.org/project/nsdpy/">PyPI</a> website to be used directly in the terminal and included in a pipeline.
                        It is also available on <a href="https://colab.research.google.com/drive/1UmxzRc_k5sNeQ2RPGe29nWR_1_0FRPkq" >Google Colab</a>.
                        The documentation is available on <a href="https://nsdpy.readthedocs.io/en/latest/">readTheDocs</a> and a
                        paper has been submitted to the <a href="https://www.journals.elsevier.com/softwarex">softwareX journal</a>.. waiting for approval..
                    </article>
                    <aside>
                        <h2>NSDPY workflow</h2>
                        <img src="https://raw.githubusercontent.com/RaphaelHebert/nsdpy/main/workflow.png" alt="NSDPY workflow" width="100%"/>
                    </aside>
                </section>
            </>:
            // TODO: put a spinner
            <p>Loading project...</p>
        }
        </>
    )
}

export default NSDPY;