import * as React from "react";
import "../styles/Splash.scss";
import { Line } from "../components/Line";
import { Icon } from "../components/Icon";
import { Shake } from "../components/Shake";
import { motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export const Splash = ({ section }) => {
  const { y, scrollTo } = useScroll();
  const [className, setClassName] = React.useState("div-hidden");

  const [showConfetti, setShowConfetti] = React.useState(false);

  const { width } = useWindowSize();
  const height = document.getElementsByClassName("wrapper")[0]?.clientHeight;

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
      <Confetti
        onConfettiComplete={() => setShowConfetti(false)}
        recycle={false}
        numberOfPieces={350}
        run={showConfetti}
        width={width}
        height={height}
      />
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
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          onDrag={() => {
            if (!showConfetti) {
              setShowConfetti(true);
            }
          }}
        >
          <motion.h1
            whileHover={{ scale: 1.05 }}
            style={{ textAlign: "center", cursor: "grab" }}
          >
            Nathan
            <br />
            Macfarlane
          </motion.h1>
        </motion.div>
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
