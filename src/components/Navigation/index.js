import { useNavigate } from "react-router-dom";
import ProjectsNavigation from "./ProjectsNavigation";
import ContactsNavigation from "./ContactsNavigation";

import "../../app.css"




const NavigationBar = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/', {replace: true})
    }

    return(
        <div className="flex rowNoWrap justifySpaceBetween navBar">
            <div className="flex rowNoWrap justifySpaceAround">
                <button className="navButton" id="basic-button" onClick={handleClick}>HOME</button>
                <ProjectsNavigation />
            </div>
            <ContactsNavigation />
        </div>
    )
}

export default NavigationBar;