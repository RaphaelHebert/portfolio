import { useState } from "react";

import "./landing.css"

const Cover = () => {
    const [mainClass, setMainClass] = useState("parentLanding")
    
    return(
        <div className={mainClass}>
            <button className="enterButton" onClick={() => {setMainClass("disappear")}}>Come in!</button>
            <h1 className="title">Welcome !</h1>
            <div className="childLanding" />
        </div> 
    )
}
export default Cover;

