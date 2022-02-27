import promission from '../projects/Flask/img/promission-overview.png'
import pipy from '../projects/NSDPY/img/pypi.png'
import CodePenLogo from '../projects/CodePen/img/svgLogo.js'
import TamGiang from '../projects/TamGiang/img/tamGiangSizeClassFrequencies.png'

const projectsList = [
    {
        name: "Limitless possibilities",
        catchphrase: "I love building useful things and use the technology to improve people's life.",
        img: "",
        link: "",
        github: "",
        description: "",
        languages: ["Python"],
        type: "page",
    },
    {
        name: "NSDPY",
        catchphrase: "Making bioinformaticians life easier.",
        img: pipy,
        link: "https://pypi.org/project/nsdpy/",
        github: "https://github.com/RaphaelHebert/nsdpy",
        description: "Automatize the download of DNA sequences from NCBI, sort them according to their taxonomy and filter them with a gene name (provided as a regular expression)",
        languages: ["Python"],
        type: "package",
    },
    {
        name: "CodePen",
        catchphrase: "Practice makes it perfect",
        img: <CodePenLogo />,
        link: "https://codepen.io/raphaelhebert-the-scripter",
        github: "",
        description: "Some little projects to play with CSS3, HTML5 and JavaScript",
        language: ["CSS", "HTML", "JavaScript"],
        type: "others",
    },
    {
        name: "TamGiang",
        catchphrase: "Getting knowledge from data",
        img: TamGiang,
        link: "https://colab.research.google.com/drive/11wadYnU2DAV5y3gLCjAtFfE4f5IojN4W?usp=sharing",
        github: "",
        description: "I participated in the COMPOSE project of the IRD. Working with the university of Da Nang team, I analysed data coming sampling campaign.",
        language: ["R", "Python"],
        type: "Data science",
    },
    {
        name: "Flask",
        catchphrase: "A lightweight framework for web development with python",
        img: promission,
        link: "https://promissions.herokuapp.com/login", 
        github: "https://github.com/RaphaelHebert/promission",
        description: "Wirtten in python, using Flask framework and some bootstrap, and a SQL database hosted on heroku and managed with SQLite. It intended to be a market place and provide  functionnalities to let English teachers manage their agenda, find work and publish their profile and to let agents manage a team of teachers, publich adds and find new teachers.. " ,
        language: ["Python", "JavaScript", "HTML", "CSS"],
        type: "Data science",
    }

]

export default projectsList;