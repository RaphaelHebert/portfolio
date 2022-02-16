import { useState } from "react";

import "./landing.css"


const Cover = ({ setFirstVisit }) => {
    const [mainClass, setMainClass] = useState("parentLanding")

    const handleClick = () => {
        setMainClass("disappear");
        setFirstVisit(false)
    }
    
    return(
        <div className={mainClass}>
            <button className="enterButton" onClick={() => handleClick()}>Come in!</button>
            <h1 className="title">Welcome !</h1>
            <div className="childLanding" />
        </div> 
    )
}
export default Cover;

