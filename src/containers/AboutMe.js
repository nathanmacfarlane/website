import * as React from "react";
import { TextNumber } from "../components/TextNumber";
import { TechnologyItem } from "../components/TechnologyItem";
import Nate from "../images/nate.png";
import { Grid } from "@material-ui/core/";

export const AboutMe = ({ section }) => {
  return (
    <div className={section}>
      <div className="flex">
        <TextNumber num={1} text="About Me" />
      </div>
      <div className="flex">
        <div style={{ paddingRight: "70px", margin: 0 }}>
          <p>
            Hello! My name is Nathan and I have a passion for learning. My
            experience in the industry and life in general has taught me that
            there is an infinite amount of knowledge out there. I’m just trying
            to pick up as much of it as I can.
            <br />
          </p>
          <p>Here are a few technologies I've worked with recently:</p>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TechnologyItem text="Typescript" />
              <TechnologyItem text="Python" />
              <TechnologyItem text="Swift" />
            </Grid>
            <Grid item xs={3}>
              <TechnologyItem text="React" />
              <TechnologyItem text="Gatsby" />
            </Grid>
            <Grid item xs={3}>
              <TechnologyItem text="GCP" />
              <TechnologyItem text="AWS" />
              <TechnologyItem text="GraphQl" />
              <TechnologyItem text="MySQL" />
              <TechnologyItem text="DynamoDB" />
            </Grid>
            <Grid item xs={3}>
              <TechnologyItem text="Vim" />
              <TechnologyItem text="Zsh" />
              <TechnologyItem text="Tmux" />
            </Grid>
          </Grid>
        </div>
        <img src={Nate} style={{ height: 200, width: 200 }} />
      </div>
    </div>
  );
};
