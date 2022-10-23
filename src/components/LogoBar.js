import { Logos } from "../constants";

function LogoBar({ techStack }) {
  return (
    <div className="flex rowWrap justifySpaceEvenly alignContentCenter alignItemsCenter logos">
      {techStack.map(
        (item) =>
          Logos[item].imgLink &&
          Logos[item].name && (
            <img
              src={Logos[item].imgLink}
              alt={`${Logos[item].name} logo`}
              width="8%"
            />
          )
      )}
    </div>
  );
}

export default LogoBar;
