import * as React from "react";
import { Arrow } from "../icons/arrow";
import { Dot } from "../icons/dot";
import { Contact } from "../icons/contact";
import { Projects } from "../icons/projects";
import { Experience } from "../icons/experience";
import { About } from "../icons/about";

export const Icon = ({ type, onClick, size, style, rotation }) => {
  let rotDeg = 0;
  if (rotation === "right") {
    rotDeg = 90;
  } else if (rotation === "left") {
    rotDeg = -90;
  } else if (rotation === "flip") {
    rotDeg = 180;
  }

  const [fillColor, setFillColor] = React.useState(
    type === "arrow" ? "white" : "#72d1bc"
  );

  if (type === "arrow") {
    return (
      <div
        onClick={onClick}
        onMouseLeave={() => setFillColor("white")}
        onMouseEnter={() => setFillColor("#72d1bc")}
        style={{
          ...style,
          width: size || 55,
          height: size || 55,
          onClick,
          cursor: "pointer",
          transform: `rotate(${rotDeg}deg)`,
        }}
      >
        <Arrow fill={fillColor} />
      </div>
    );
  } else if (type === "dot") {
    return (
      <div
        style={{
          ...style,
          width: 10,
          height: 10,
          transform: `rotate(${rotDeg}deg)`,
        }}
      >
        <Dot fill={fillColor} />
      </div>
    );
  } else if (type === "contact") {
    return (
      <div
        style={{
          ...style,
          width: size || 35,
          height: size || 35,
          transform: `rotate(${rotDeg}deg)`,
        }}
      >
        <Contact fill={fillColor} />
      </div>
    );
  } else if (type === "projects") {
    return (
      <div
        style={{
          ...style,
          width: size || 35,
          height: size || 35,
          transform: `rotate(${rotDeg}deg)`,
        }}
      >
        <Projects fill={fillColor} />
      </div>
    );
  } else if (type === "experience") {
    return (
      <div
        style={{
          ...style,
          width: size || 35,
          height: size || 35,
          transform: `rotate(${rotDeg}deg)`,
        }}
      >
        <Experience fill={fillColor} />
      </div>
    );
  } else if (type === "about") {
    return (
      <div
        style={{
          ...style,
          width: size || 35,
          height: size || 35,
          transform: `rotate(${rotDeg}deg)`,
        }}
      >
        <About fill={fillColor} />
      </div>
    );
  }
  return <>UNKNOWN ICON</>;
};
