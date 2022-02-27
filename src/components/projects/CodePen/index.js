import { useState, useEffect } from "react";

import Intro from '../../intro'

import projectsList from "../../projectsList/projectsList";
import "../projects.css";
import "../../../app.css"


const javascript = 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
const css3 = 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
const html5 = '	https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
const codepen = 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
const images = [codepen, javascript, css3, html5]





const CodePen = () => {
    const [project, setProject] = useState([])

    useEffect( () => {
        setProject(projectsList.filter(project => project.name === "CodePen")[0]);
    }, [])
       

    return(
        <>
        
        {
            project?
            <div className="flexColNoWrap main mainContainer">
                <Intro project={project} />
                <div className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter logos">
                    {images.map( img => {
                        return(
                            <img src={img} alt="logo" width="100px"/>
                        )            
                    })}
                </div>
                <div className="flex rowNoWrap justifyCenter">
                    <a href="https://codepen.io/raphaelhebert-the-scripter">Visit my CodePen here </a>
                </div>
                <section className="flex colWrap justifyStretch alignItemsStretch alignContentCenter">
                    <article className="flex colNoWrap justifyCenter codePenDisplay">
                        <h2> Some practice of HTML5, CSS3 and JavaScript.. </h2>
                        <iframe title="font-style" title="fonts" loading="lazy" src="https://codepen.io/raphaelhebert-the-scripter/embed/XWMrbOB?default-tab=html%2Cresult"/>
                    </article>
                    <article className="flex colNoWrap justifyCenter codePenDisplay">
                        <h2> Pure HTML5 and CSS3 can achieve a lot </h2>
                        <iframe title="font-style" width="100%" title="CSSstopwatch" loading="lazy" src="https://codepen.io/raphaelhebert-the-scripter/embed/XWpLJZe?default-tab=html%2Cresult" />
                    </article>
                    <article className="flex colNoWrap justifyCenter codePenDisplay">
                        <h2> Press the arrow keys to make the man move! </h2>
                        <iframe title="font-style" width="100%" title="ManJumps" loading="lazy" src="https://codepen.io/raphaelhebert-the-scripter/embed/vYxGWrR?default-tab=html%2Cresult" />
                    </article>
                </section>
            </div>:
            // TODO: put a spinner
            <p>Loading project...</p>
        }
        </>
    )
}
export default CodePen