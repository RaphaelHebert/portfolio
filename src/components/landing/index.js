import Cover from "./Cover";
import Projects from "../projectsList";


const Landing = ({ firstVisit, setFirstVisit }) => {

    return (
        <>
            { firstVisit && <Cover  setFirstVisit={setFirstVisit}/>}
            <Projects />
        </>
    )
}

export default Landing;

