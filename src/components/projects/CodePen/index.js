import { useState, useEffect } from "react";

import projectsList from "../../projectsList/projectsList";
import "../projects.css";


const javascript = 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
const css3 = 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
const html5 = '	https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
const codepen = 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
const images = [codepen, javascript, css3, html5]



const CodePen = () => {
    const [project, setProject] = useState([])

    useEffect( () => {
        setProject(projectsList.filter(project => project.name === "CodePen")[0])
    }, [])
       
    return(
        <>
        {
            project?
            <>
                <div className="logos">
                    <h1>{project.name}</h1>
                    <p>Microplastic in TamGiang lagoons</p>
                </div>
                <div className="logos">
                    {images.map( img => {
                        return(
                            <img src={img} alt="logo" width="100px"/>
                        )            
                    })}
                </div>
                <section className="logos">
                    <div className="flexCol contentStretch">
                        <div className="flexRow contentStretch">
                            <article>
                            Some practice of HTML5, CSS3 and JavaScript..
                            </article>
                            <aside>
                                <div className="asideImages viewportHeight pens" >
                                    <iframe title="font-style" width="100%" title="Font style" src="https://codepen.io/raphaelhebert-the-scripter/embed/XWMrbOB?default-tab=html%2Cresult" />
                                </div>
                            </aside>
                        </div>
                        <div className="flexRow contentStretch">
                            <article>
                            Some practice of HTML5, CSS3 and JavaScript..
                            </article>
                            <aside>
                                <div className="asideImages viewportHeight pens" >
                                    <iframe title="font-style" width="100%" title="Font style" src="https://codepen.io/raphaelhebert-the-scripter/embed/XWpLJZe?default-tab=html%2Cresult" />
                                </div>
                            </aside>
                        </div>
                        <div className="flexRow contentStretch">
                            <article>
                            Some practice of HTML5, CSS3 and JavaScript..
                            </article>
                            <aside>
                                <div className="asideImages viewportHeight pens" >
                                    <iframe title="font-style" width="100%" title="Font style" src="https://codepen.io/raphaelhebert-the-scripter/embed/vYxGWrR?default-tab=html%2Cresult" />
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </>:
            // TODO: put a spinner
            <p>Loading project...</p>
        }
        </>
    )
}
export default CodePen