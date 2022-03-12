import { useState, useEffect } from "react";

import Spinner from '../../Spinner'
import Intro from '../../intro'
import projectsList from "../../projectsList/projectsList";
import "../projects.css";
import "../../../app.css"
import "../../projectsList/projectsList.css"

//images
import snake from './img/snake.png';
const html5 = "https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg";
const css3 = "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg";
const JS = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
const React = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
const Node = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg";
const SQLite3 = "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg";



const images = [
    html5,
    css3,
    JS,
    React, 
    Node,
    SQLite3,
]



const Snake = () => {

    // TODO: get the project name from url 
    const [project, setProject] = useState([])
    const [loaded, setLoaded] = useState({spinner: "flex colNoWarp justifyCenter", img: "displayNone"})

    useEffect( () => {
        setProject(projectsList.filter(project => project.name === "Snake")[0])
    }, [])

    const handleOnload = () => {
        setLoaded({spinner: "displayNone", img: "displayBlock"})
    }

    return(
        <>
        {
            project?
            <div className="flexColNoWrap main mainContainer">
                <Intro project={project} />
                <div className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter logos">
                    {images.map( img => {
                        return(
                            <img src={img} alt="logo" width="8%"/>
                        )            
                    })}
                </div>
                <section className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter alignContentStretch logos">
                    <article className="flex colNoWrap justifySpaceEvenly">
                        <p>
                        Built with React, CSS3 and HTML5 for the front-end and Node.js and SQLite3 for the back-end this little single page application lets you play this classic game, sign up and create an account to register your scores online and compete with the other players.
                        </p>
                        <p>Links to the Snake references and documentation:
                            <ul>
                                <li><a href={project.link}>the website</a></li>
                                <li><a href={project.github}>GitHub repository</a></li>
                                <li><a href="https://github.com/RaphaelHebert/gamesAPI">the back-end repository</a></li>
                            </ul>
                        </p>
                    </article>
                    <aside className="flex colNoWrap justifyCenter">
                        <h2>The Snake overview</h2>
                        <div className={loaded.spinner}>
                            <Spinner/>
                        </div>
                        <a href={project.link}><img className={loaded.img} src={snake} alt="snake playground" onLoad={handleOnload}/></a>
                    </aside>
                </section>
            </div>:
            // TODO: put a spinner
            <Spinner />
        }
        </>
    )
}

export default Snake;