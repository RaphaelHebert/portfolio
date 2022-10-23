// TODO: define subcategories for typeOfTool (exp language, DBMS,Framework, style component, documentation, etc...)

const Logos = {
  HTML5: {
    name: "HTML5",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg",
    typeOfTool: "frontend",
  },
  CSS3: {
    name: "CSS3",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    typeOfTool: "frontend",
  },
  JS: {
    name: "JS",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    typeOfTool: "frontend",
  },
  TS: {
    name: "TS",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    typeOfTool: "frontend",
  },
  React: {
    name: "React",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    typeOfTool: "frontend",
  },
  Node: {
    name: "Node",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    typeOfTool: "backend",
  },
  MUI: {
    name: "MUI",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/Logo_material_design.svg",
    typeOfTool: "frontend",
  },
  Slack: {
    name: "Slack",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
    typeOfTool: "project management",
  },
  Notion: {
    name: "Notion",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    typeOfTool: "project management",
  },
  Firebase: {
    name: "Firebase",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
    typeOfTool: "backend",
  },
  Redux: {
    name: "Redux",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png",
    typeOfTool: "frontend",
  },
  Saga: {
    name: "Saga",
    imgLink: "https://cdn.worldvectorlogo.com/logos/redux-saga.svg",
    typeOfTool: "frontend",
  },
  Bitbucket: {
    name: "Bitbucket",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Atlassian_Bitbucket_Logo.png",
    typeOfTool: "version control",
  },
  UnderDogDevs: {
    name: "UnderDogDevs",
    imgLink: "https://www.underdogdevs.org/images/underdogdevs-03.png",
    typeOfTool: "webapp",
  },
  Okta: {
    name: "Okta",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Okta_logo.svg",
    typeOfTool: "backend",
  },
  Antd: {
    name: "Antd",
    imgLink:
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    typeOfTool: "frontend",
  },
  Trello: {
    name: "Trello",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg",
    typeOfTool: "project management",
  },
  R: {
    name: "R",
    imgLink:
      "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white",
    typeOfTool: "backend",
  },
  Colab: {
    name: "Colab",
    imgLink:
      "https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=googlecolab&color=525252",
    typeOfTool: "environment",
  },
  Python: {
    name: "Python",
    imgLink:
      "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
    typeOfTool: "backend",
  },
  Ubuntu: {
    name: "Ubuntu",
    imgLink:
      "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
    typeOfTool: "environment",
  },
  Flask: {
    name: "Flask",
    imgLink:
      "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
    typeOfTool: "backend",
  },
  MySQL: {
    name: "MySQL",
    imgLink:
      "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    typeOfTool: "backend",
  },
  Bootstrap: {
    name: "Bootstrap",
    imgLink:
      "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    typeOfTool: "frontend",
  },
  Heroku: {
    name: "Heroku",
    imgLink:
      "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
    typeOfTool: "backend",
  },
  Sqlite3: {
    name: "Sqlite3",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
    typeOfTool: "backend",
  },
  // JS: {
  //   name: "JS",
  //   imgLink:
  //     "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
  //   typeOfTool: "frontend",
  // },
  CodePen: {
    name: "CodePen",
    imgLink:
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    typeOfTool: "environment",
  },
  GitHub: {
    name: "GitHub",
    imgLink: "./img/github.png",
    typeOfTool: "version control",
  },
  SoftwareX: {
    name: "SoftwareX",
    imgLink: "./img/softwareX.jpeg",
    typeOfTool: "journal",
  },
  ReadTheDocs: {
    name: "ReadTheDocs",
    imgLink: "./img/readTheDoc.png",
    typeOfTool: "project management",
  },
  NCBI: {
    name: "NCBI",
    imgLink: "./img/ncbi.png",
    typeOfTool: "resources",
  },
  Pypi: {
    name: "Pypi",
    imgLink: "./img/pypi.png",
    typeOfTool: "software repository",
  },
  IRD: {
    name: "IRD",
    imgLink: "./img/logos/ird.png",
    typeOfTool: "organization",
  },
  DanangUniversity: {
    name: "DanangUniversity",
    imgLink: "./img/logos/danangUniversity.png",
    typeOfTool: "organization",
  },
};

export default Logos;
