import Cover from "./Cover";
import Projects from "../projectsList";
import Intro from "./Intro"

import './landing.css'


const Landing = ({ firstVisit, setFirstVisit }) => {

    return (
        <>
            { firstVisit && <Cover  setFirstVisit={setFirstVisit}/>}
            <div className="flexColNoWrap">
                <Intro />
                <Projects />
            </div>
           
        </>
    )
}

export default Landing;

