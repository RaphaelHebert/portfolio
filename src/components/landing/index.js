import { connect } from 'react-redux'


import Cover from "./Cover";
import Projects from "../projectsList";


const Landing = props => {
    
    return (
        <>
            {props.firstVisit && <Cover />}
            <Projects />
        </>
    )
}

const MapStatesToProps = state => {
    return(
        {
            firstVisit: state.firstVisit,
        }
    )
};
export default connect(MapStatesToProps, [])(Landing);

