import "./social.css"

import github from './logos/github.png'
import codepen from './logos/codepen.png'
import twitter from './logos/twitter.png'
import linkedin from './logos/linkedin.png'


const Social = () => {
    return (
        <div className="flexboxRow">
            {/* TODO: make logo size responsive? */}
            <a href="https://github.com/RaphaelHebert/RaphaelHebert"><img src={github} alt="my github" width="50px"/></a>
            <a href="https://codepen.io/raphaelhebert-the-scripter"><img src={codepen} alt="my codepen" width="50px"/></a>
            <a href="https://twitter.com/Joe84196982"><img src={twitter} alt="my twitter" width="50px"/></a>
            <a href="https://linkedin.com/in/raphael-hebert"><img src={linkedin} alt="my linkedin" width="50px"/></a>

        </div>
    )
}

export default Social;