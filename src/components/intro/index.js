import '../../app.css'
import Navigation from '../Navigation'


const Intro = ( { project } ) => {
    
        return(
            <div className="flex rowNoWrap">
                <Navigation />
                <div className="main item5 marginLeft">
                    <h2>{project.name}</h2> 
                    <p>{project.catchphrase}</p>
                    {project.name === "Limitless possibilities" && <p>That's why I code.</p>}
                </div>
            </div>
        )
}

export default Intro;