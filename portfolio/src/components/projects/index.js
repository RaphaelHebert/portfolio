import projectsList from "./projectsList.js";

import './projects.css';

import testImg from './images/try.png'


const Projects = () => {
    return (
        <>
        {
            projectsList? projectsList.map(project => {
                return(
                    <div className="project" >
                        <div>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                        {/* TODO: setup min width */}
                        <img alt={`${ project.name} image`} src={testImg}/>
                    </div>
                )
            }):
            <p>No project to display</p>

        }
        </>
    )
}

export default Projects;