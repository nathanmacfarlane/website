import * as React from "react";
import "../styles/NavBar.scss";
import { useScroll } from "../hooks/useScroll";
import { useIsMobile } from "../hooks/useIsMobile";

export const NavItem = ({ num, text, onClick, style }) => (
  <span style={style} className="nav-item" onClick={onClick}>
    <span className="nav-item-num">0{num}.</span> {text}
  </span>
);

export const NavBar = () => {
  const { y, dir, scrollTo } = useScroll();
  const [className, setClassName] = React.useState("div-visible");

  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (dir === "up") {
      setClassName("div-visible");
    } else if (y < 100 && className !== "div-visible") {
      setClassName("div-visible");
    } else if (dir === "down" && y > 100) {
      setClassName("div-hidden");
    }
  }, [y]);

  return (
    <div className={`nav-bar ${className}`}>
      <NavItem
        style={{ cursor: "pointer" }}
        num={4}
        text="Contact"
        onClick={() => scrollTo(5)}
      />
      <NavItem
        style={{ cursor: "pointer" }}
        num={3}
        text="Projects"
        onClick={() => scrollTo(4)}
      />
      <NavItem
        style={{ cursor: "pointer" }}
        num={2}
        text="Experience"
        onClick={() => scrollTo(3)}
      />
      <NavItem
        style={{ cursor: "pointer" }}
        num={1}
        text="Me"
        onClick={() => scrollTo(2)}
      />
    </div>
  );
};
