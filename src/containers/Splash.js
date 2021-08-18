import * as React from "react";
import "../styles/Splash.scss";
import { Line } from "../components/Line";
import { Icon } from "../components/Icon";
import { Shake } from "../components/Shake";
import { motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined";

export const Splash = ({ section }) => {
  const { y, scrollTo } = useScroll();
  const [className, setClassName] = React.useState("div-hidden");

  React.useEffect(() => {
    if (y !== undefined && y < 100) {
      setClassName("div-visible");
    } else {
      setClassName("div-hidden");
    }
  }, [y]);

  const scrollDown = () => scrollTo(2);

  return (
    <div className={`splash ${section}`}>
      <Line />
      <motion.p
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ opacity: 0, fontSize: "1.3em" }}
        className="mono"
      >
        Hello! I'm a full stack software engineer currently located near Lake
        Tahoe.
        <br />
        Thanks for checking out my site!
      </motion.p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.h1 style={{ textAlign: "center" }}>
          Nathan
          <br />
          Macfarlane
        </motion.h1>
      </div>
      <motion.div
        className={`arrow-wrapper ${className}`}
        animate={{ scale: 1.0 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Shake>
          <Icon type="arrow" onClick={scrollDown} />
        </Shake>
      </motion.div>
    </div>
  );
};
