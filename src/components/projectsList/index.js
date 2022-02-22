import { Link } from "react-router-dom";

//components
import projectsList from "./projectsList.js";
//style
import './projects.css';


const Projects = () => {
    return (
        <>
            <div className="projectsContainer">
            {
                projectsList? projectsList.map(project => {
                    return(
                        <div className="project" >
                            <Link to={`projects/${project.name}`} style={{textDecoration: 'none', color: "inherit"}}>
                                <div>
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                </div>
                                {project.name === "CodePen"? project.img : 
                                <img alt={`${project.name} image`} src={project.img}/>}
                            </Link>
                        </div>
                    )
                }):
                <p>No project to display</p>

            }
            </div>
       
        </>
    )
}

export default Projects;