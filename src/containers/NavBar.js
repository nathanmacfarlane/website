import * as React from "react";
import "../styles/NavBar.scss";
import { useScroll } from "../hooks/useScroll";
import { useIsMobile } from "../hooks/useIsMobile";
import { Drawer, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  paperDark: {
    background: "#0e1224",
    color: "white",
    padding: 10,
  },
});

export const NavItem = ({ num, text, onClick, style }) => (
  <span style={style} className="nav-item" onClick={onClick}>
    <span className="nav-item-num">0{num}.</span> {text}
  </span>
);

const WebView = () => {
  const { y, dir, scrollTo } = useScroll();
  const [className, setClassName] = React.useState("div-visible");

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

const MobileView = () => {
  const { scrollTo } = useScroll();
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const styles = useStyles();

  const spaceHeight = 20;

  const onItemClick = (sectionNumber) => {
    setMenuIsOpen(false);
    scrollTo(sectionNumber);
  };

  return (
    <>
      <IconButton
        aria-label="open drawer"
        onClick={() => setMenuIsOpen(true)}
        style={{ position: "fixed", top: 10, left: 10 }}
      >
        <MenuIcon
          style={{ fill: "white", opacity: 0.5, width: 40, height: 40 }}
        />
      </IconButton>
      <Drawer
        width="500px"
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        classes={{ paper: styles.paperDark }}
      >
        <div style={{ width: "100%", height: 40 }} />
        <NavItem
          style={{ cursor: "pointer" }}
          num={1}
          text="Me"
          onClick={() => onItemClick(2)}
        />
        <div style={{ width: "100%", height: spaceHeight }} />
        <NavItem
          style={{ cursor: "pointer" }}
          num={2}
          text="Experience"
          onClick={() => onItemClick(3)}
        />
        <div style={{ width: "100%", height: spaceHeight }} />
        <NavItem
          style={{ cursor: "pointer" }}
          num={3}
          text="Projects"
          onClick={() => onItemClick(4)}
        />
        <div style={{ width: "100%", height: spaceHeight }} />
        <NavItem
          style={{ cursor: "pointer" }}
          num={4}
          text="Contact"
          onClick={() => onItemClick(5)}
        />
      </Drawer>
    </>
  );
};

export const NavBar = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <WebView />;
};
