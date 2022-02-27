import { Link } from "react-router-dom";

//components
import projectsList from "./projectsList.js";
//style
import '../../app.css'
import './projectsList.css';



const Projects = () => {
    return (
        <>
            <div className="flex rowWrap justifySpaceEvenly alignItemsStretch mainContainer">
            {
                projectsList? projectsList.map(project => {
                    if(project.name !== "Limitless possibilities"){
                    return(
                        <div className="flex colNoWrap project" >
                            <Link to={`projects/${project.name}`} style={{textDecoration: 'none', color: "inherit", flexGrow: 1, display:"flex", flexFlow:"column nowrap", justifyContent:"space-evenly", padding:"15px"}}>
                                <div className="flex colNoWrap justifyCenter alignItemsCenter">
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                </div>
                                {project.name === "CodePen"? project.img : 
                                <img alt={`${project.name} image`} src={project.img}/>}
                            </Link>
                        </div>
                    )}
                }):
                <p>No project to display</p>

            }
            </div>
       
        </>
    )
}

export default Projects;