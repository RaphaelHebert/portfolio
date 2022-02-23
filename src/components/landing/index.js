import Cover from "./Cover";
import Projects from "../projectsList";
import projectsList from "../projectsList/projectsList";
import Intro from "../intro"

import './landing.css'
import '../../app.css'


const Landing = ({ firstVisit, setFirstVisit }) => {
    
    const project = projectsList.filter(project => 
        project.name === "Limtiless posssibilities"
    )[0]

    return (
        <>
            { firstVisit && <Cover setFirstVisit={setFirstVisit}/>}
            <div className="flexColNoWrap main">
                <Intro project={project} />
                <Projects />
            </div>
           
        </>
    )
}

export default Landing;

