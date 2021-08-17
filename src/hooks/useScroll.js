import * as React from "react";
import { animateScroll as scroll } from "react-scroll";

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined";

export const useScroll = () => {
  const [y, setY] = React.useState(isBrowser ? window.scrollY : 0);
  const [dir, setDir] = React.useState();

  const handleNavigation = React.useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setDir("up");
      } else if (y < window.scrollY) {
        setDir("down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const scrollTo = (sectionNumber) => {
    const className = `section-${sectionNumber}`;
    const element = document.getElementsByClassName(className)[0];
    const boundingRect = element.getBoundingClientRect();
    const yPos = boundingRect.y;
    scroll.scrollMore(yPos, { duration: 300 });
  };

  return { y, dir, scrollTo };
};
