import * as React from "react";
import { TextNumber } from "../components/TextNumber";
import { TechnologyItem } from "../components/TechnologyItem";
import { Grid } from "@material-ui/core/";
import "../styles/Experience.scss";

const ridgelineDescription = `
  Ridgeline Apps is a startup tackling the very complex space of enterprise investment management software.
  At this Dave Duffield company, I first served as the UI Liaison for my team and then the Technical Lead.
  In both of these roles I had the opportunity to write meaningful code and make decisions that guided my team of 8-12 engineers.
`;

const tapestryDescription = `
  In my time at Tapestry, I helped build cargo logistics software used by Boeing and the Department of Defense.
  One of my primary responsibilities was in transitioning the existing front end from ActionScript (flash) to React.
  I also was one of the primary engineers on an internal project to build an Angular application that managed employees, requirements, events, travel expenses, and more.
`;

const calPolyDescription = `
  For several quarters I TAed both the iOS and the Android mobile development classes.
  I graded assignments and answered technical questions regarding Kotlin, Swift, GCP, and MVC and MVVM design patterns.
  I also TAed a summer camp for middle and high school students where we taught them the fundamentals of computer science in a collaborative and exciting environment.
`;

const Item = ({ company, role, description, technologies }) => {
  return (
    <div className="experience-item">
      <div className="experience-item-overlay" />
      <h2 className="company">{company}</h2>
      <h3 className="role">{role}</h3>
      <p className="description">{description}</p>
      <Grid container spacing={2}>
        {technologies.map((tech, index) => {
          return (
            <Grid item key={tech}>
              <TechnologyItem text={tech} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export const Experience = ({ section }) => {
  return (
    <div className={section}>
      <div className="flex">
        <TextNumber num={2} text="Experience" />
      </div>
      <br />
      <br />
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Item
            company="Ridgeline Apps"
            role="Product Engineer • Technical Lead"
            description={ridgelineDescription}
            technologies={["React", "Python", "AWS"]}
          />
        </Grid>
        <Grid item xs={6}>
          <Item
            company="Cal Poly SLO"
            role="Teacher Assitant"
            description={calPolyDescription}
            technologies={["Swift", "Kotlin"]}
          />
        </Grid>
        <Grid item xs={6}>
          <Item
            company="Tapestry Solutions"
            role="Software Engineer"
            description={tapestryDescription}
            technologies={["Angular"]}
          />
        </Grid>
      </Grid>
    </div>
  );
};
