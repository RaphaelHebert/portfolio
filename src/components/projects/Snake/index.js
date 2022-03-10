import { useState, useEffect } from "react";

import Spinner from '../../Spinner'
import Intro from '../../intro'
import projectsList from "../../projectsList/projectsList";
import "../projects.css";
import "../../../app.css"
import "../../projectsList/projectsList.css"

//images
import snake from './img/snake.png';
// import python from './img/python.png';
// import ncbi from './img/ncbi.png';
// import readTheDocs from './img/readTheDoc.png';
// import colab from './img/colabgoogle.png';
// import github from './img/github.png';
// import softwareX from './img/softwareX.jpeg'


// const images = [
//     pipy,
//     python,
//     ncbi,
//     readTheDocs, 
//     colab,
//     github,
//     softwareX
// ]



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
                    {/* {images.map( img => {
                        return(
                            <img src={img} alt="logo" width="100px"/>
                        )            
                    })} */}
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
                        <img className={loaded.img} src={snake} alt="snake playground" onLoad={handleOnload}/>   
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