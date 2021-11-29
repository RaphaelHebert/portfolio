import { Link } from "react-router-dom";
//components
import projectsList from "./projectsList.js";
//style
import './projects.css';
//image
import testImg from './images/try.png'


const Projects = () => {
    return (
        <>
        {
            projectsList? projectsList.map(project => {
                return(
                    <Link to={`projects/${project.name}`}>
                        <div className="project" >
                            <div>
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                            </div>
                            {/* TODO: setup min width */}
                            <img alt={`${ project.name} image`} src={testImg}/>
                        </div>
                    </Link>
                )
            }):
            <p>No project to display</p>

        }
        </>
    )
}

export default Projects;