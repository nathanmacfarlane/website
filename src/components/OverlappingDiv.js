import * as React from "react";
import { TechnologyItem } from "../components/TechnologyItem";
import { Icon } from "../components/Icon";
import { Grid } from "@material-ui/core/";
import { motion } from "framer-motion";
import "../styles/OverlappingDiv.scss";

export const OverlappingDiv = ({
  type,
  image,
  title,
  technologies,
  orientation,
  onClick,
  description,
}) => {
  const [isHovering, setIsHovering] = React.useState(false);
  const isLeft = orientation == "left";
  const imageStyles = {
    width: "100%",
    height: "320px",
    borderRadius: "4px",
    background: `linear-gradient(0deg, rgba(114, 209, 188, 0.3), rgba(114, 209, 188, 0.3)), url(${image})`,
    backgroundSize: "cover",
    marginLeft: isLeft ? "-150px" : undefined,
  };
  const textStyles = {
    minHeight: "200px",
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    color: "white",
    marginLeft: isLeft ? undefined : "-150px",
    zIndex: 10,
  };
  const text = (
    <div className="content">
      <div className="project-item">
        <h2 className="type" style={{ textAlign: isLeft ? "left" : "right" }}>
          {type}
        </h2>
        <h3 className="title" style={{ textAlign: isLeft ? "left" : "right" }}>
          {title}
        </h3>
        <div
          className="description"
          style={{ textAlign: isLeft ? "left" : "right" }}
        >
          <p>{description}</p>
          <Grid container direction={isLeft ? "row" : "row-reverse"}>
            {technologies.map((tech, index) => {
              return (
                <span
                  style={{
                    paddingLeft: isLeft ? (index === 0 ? 0 : 20) : undefined,
                    paddingRight: isLeft ? undefined : index === 0 ? 0 : 20,
                  }}
                  key={tech}
                >
                  <Grid item>
                    <TechnologyItem text={tech} />
                  </Grid>
                </span>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );

  const variants = {
    arrowActive: {
      opacity: 1.0,
      x: 20,
    },
    arrowInactive: {
      opacity: 0.0,
      x: 0,
    },
    containerActive: {
      x: -40,
    },
    containerInactive: {
      x: 0,
    },
  };

  const overlayVariant = {
    visible: {
      opacity: 1.0,
      display: "block",
    },
    hidden: {
      opacity: 0.0,
      display: "none",
    },
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <motion.div
          onMouseLeave={() => setIsHovering(false)}
          onMouseEnter={() => setIsHovering(true)}
          onClick={onClick}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="container"
            variants={variants}
            animate={isHovering ? "containerActive" : "containerInactive"}
          >
            {isLeft ? (
              <>
                <div style={textStyles}>{text}</div>
                <div style={imageStyles} />
              </>
            ) : (
              <>
                <div style={imageStyles} />
                <div style={textStyles}>{text}</div>
              </>
            )}
          </motion.div>
          <motion.div
            className="container-arrow"
            variants={variants}
            animate={isHovering ? "arrowActive" : "arrowInactive"}
          >
            <Icon type="arrow" size={40} rotation="left" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
