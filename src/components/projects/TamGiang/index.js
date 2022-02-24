import { useState, useEffect } from "react";

import projectsList from "../../projectsList/projectsList";
import "../projects.css";
import "../../../app.css"

import Intro from '../../intro'
import ird from "./img/logos/ird.png"
import danangUniversity from './img/logos/danangUniversity.png'
import avgLength from './img/tamGiangAvgLength.png';
import histogram from './img/tamGiangHistogram.png'
import frequencie from './img/tamGiangLengthFrequencies.png'
import distribution from './img/tamGiangSizeClassFrequencies.png'

const r = 'https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white'
const colab = 'https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=googlecolab&color=525252'
const python =	'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue'
const ubuntu = 'https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white'
const images = [ird, danangUniversity, r, colab, python, ubuntu]


const displays = [avgLength, histogram, frequencie, distribution]

const TamGiang = () => {
    const [project, setProject] = useState([])

    useEffect( () => {
        setProject(projectsList.filter(project => project.name === "TamGiang")[0])
    }, [])
       
    return(
        <>
        {
            project?
            <>
                <Intro project={project} />
                <div className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter logos">
                    {images.map( img => {
                        return(
                            <img src={img} alt="logo" width="100px"/>
                        )            
                    })}
                </div>
                <section className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter logos">
                    <article>
                       This project was the result of a partnership between the &#40;IRD Institut de Recherche pour le Developpement&#41; and Danang university of technology.
                       Data analysis plays a central role in environmental sciences. Statistics has a central role in most research fields and environmental sciences are not exeptions to that.
                       Using descriptive statistics and and good data representation helps reseachers to have a global representation of their data while inferential statistics can help them 
                       to predict the behaving of a system or even find out about some properties that would be impossible to figure out whithout this tool.  
                       As well most research papers needs to validate their results using statistics tests &#40; and yes, we love p-values..&#41;

                    </article>
                    <aside>
                        <h2>Some data displays</h2>
                        <div className="asideImages">
                            {
                                displays.map( display => {
                                    return(
                                        <img src={display} alt="display" width="500px"/>
                                    )
                                })
                            }

                        </div>
                    </aside>
                </section>
            </>:
            // TODO: put a spinner
            <p>Loading project...</p>
        }
        </>
    )
}
export default TamGiang