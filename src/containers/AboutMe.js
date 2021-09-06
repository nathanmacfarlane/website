import * as React from "react";
import { TextNumber } from "../components/TextNumber";
import { TechnologyItem } from "../components/TechnologyItem";
import Nate from "../images/nate.png";
import { Grid } from "@material-ui/core/";
import { useIsMobile } from "../hooks/useIsMobile";

export const AboutMe = ({ section }) => {
  const isMobile = useIsMobile();

  return (
    <div className={section}>
      <div className="flex">
        <TextNumber num={1} text="About Me" />
      </div>
      <div className="flex">
        <Grid container spacing={isMobile ? 4 : 0}>
          <Grid item xs={isMobile ? 12 : 9}>
            <div style={{ paddingRight: isMobile ? 0 : "70px", margin: 0 }}>
              <p>
                Hello! My name is Nathan and I have a passion for learning. My
                experience in the industry and life in general has taught me
                that there is an infinite amount of knowledge out there. I’m
                just trying to pick up as much of it as I can.
                <br />
              </p>
              <p>Here are a few technologies I've worked with recently:</p>
              <Grid container spacing={isMobile ? 0 : 2}>
                <Grid item xs={isMobile ? 6 : 3}>
                  <TechnologyItem text="Typescript" />
                  <TechnologyItem text="Python" />
                </Grid>
                <Grid item xs={isMobile ? 6 : 3}>
                  <TechnologyItem text="React" />
                  <TechnologyItem text="Gatsby" />
                </Grid>
                <Grid item xs={isMobile ? 6 : 3}>
                  <TechnologyItem text="GCP" />
                  <TechnologyItem text="AWS" />
                  <TechnologyItem text="GraphQl" />
                  <TechnologyItem text="MySQL" />
                  <TechnologyItem text="DynamoDB" />
                </Grid>
                <Grid item xs={isMobile ? 6 : 3}>
                  <TechnologyItem text="Vim" />
                  <TechnologyItem text="Zsh" />
                  <TechnologyItem text="Tmux" />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3}>
            <img
              src={Nate}
              style={{
                height: isMobile ? undefined : 200,
                width: isMobile ? "100%" : 200,
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
