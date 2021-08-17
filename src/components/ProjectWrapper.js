import * as React from "react";
import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import { navigate } from "gatsby";
import { Icon } from "../components/Icon";

export const ProjectWrapper = ({ title, children }) => {
  return (
    <div style={{ padding: "50px 200px" }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Icon type="arrow" rotation="right" onClick={() => navigate(-1)} />
          </motion.div>
        </Grid>
        <Grid item>
          <h2>{title}</h2>
        </Grid>
      </Grid>
      <div>{children}</div>
    </div>
  );
};

export const ProjectImage = ({ src }) => {
  return (
    <>
      <img style={{ width: "100%", borderRadius: 3 }} src={src} />
    </>
  );
};
