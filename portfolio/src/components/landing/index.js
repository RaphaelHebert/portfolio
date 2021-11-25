import Cover from "./Cover";
import Projects from "../projects";

const handleClick = () => {
    //Used for test purpose only
    console.log("clicked !!!")
}


const Landing = () => {
    
    return (
        
        <>
            <Cover />
            <Projects/>
            <div>
                <button onClick={handleClick}>click me please..</button>
            </div>
        </>
    )
}

export default Landing;

