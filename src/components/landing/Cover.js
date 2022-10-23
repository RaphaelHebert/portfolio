import { useState } from "react";

// local imports
import { Social } from "..";

// css imports
import "./landing.css";

const Cover = ({ setFirstVisit }) => {
  const [mainClass, setMainClass] = useState("parentLanding");

  const handleClick = (event) => {
    event.preventDefault();
    setMainClass("disappear");
    setFirstVisit(false);
  };

  return (
    <div className={mainClass}>
      <button className="enterButton" onClick={handleClick}>
        Come in!
      </button>
      <h1 className="title">Welcome !</h1>
      <div className="childLanding" />
      <div className="social">
        <Social />
      </div>
    </div>
  );
};
export default Cover;
