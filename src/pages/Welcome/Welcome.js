import './welcome.css'

const Welcome = () => {
    return(
        <div className="container">
            <div className="band one">
                <p>Back end</p>
            </div>
            <div className="band two">
                <p>Front end</p>
            </div>
            <div className="band three">
                <p>Full stack!</p>
            </div>
            <div className="four">
                <div className="logo html5 animfour"></div>
                <div className="logo css3 animfour"></div>
                <div className="logo js animfour"></div>
                <div className="logo node animfour"></div>
                <div className="logo react animfour"></div>
            </div>
        </div>
    )
}

export default Welcome;