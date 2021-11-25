import { useState } from "react";

import "./landing.css"

const Cover = () => {
    const [mainClass, setMainClass] = useState("background")
    
    return(
        <div className={mainClass}>
            <h1 className="title">Welcome !</h1>
            <button className="button" onClick={() => setMainClass("background disappear")}>Come in!</button>
        </div> 
    )
}
export default Cover;

