import { useState, useEffect } from "react";

import projectsList from "../../projectsList/projectsList";
import "../projects.css";

//images
import pipy from './img/pypi.png';
import python from './img/python.png';
import ncbi from './img/ncbi.png';
import readTheDocs from './img/readTheDoc.png';
import colab from './img/colabgoogle.png';
import github from './img/github.jpeg';

const images = [
    pipy,
    python,
    ncbi,
    readTheDocs, 
    colab,
    github,
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
                <h1>{project.name}</h1>
                <div className="logos">
                    {images.map( img => {
                        return(
                            <img src={img} alt="logo" width="100px"/>
                        )            
                    })}
                </div>
                <p> {project.description}</p>
            </>:
            // TODO: put a spinner
            <p>Loading project...</p>

        }
        </>
    )
}

export default NSDPY;