import * as React from "react";
import { TextNumber } from "../components/TextNumber";
import { OverlappingDiv } from "../components/OverlappingDiv";
import "../styles/Projects.scss";
import Drylander from "../images/Drylander.png";
import SecurityMaster from "../images/SecurityMaster.png";
import Take from "../images/Take.png";
import { navigate } from "gatsby";
import { useIsMobile } from "../hooks/useIsMobile";
import { Grid } from "@material-ui/core/";
import { TechnologyItem } from "../components/TechnologyItem";

const drylanderDescription = `
  This freelance project was designed and built by myself in Summer 2019. Over the course of several months and many
  meetings with the owners of the winery, this website was born.
  It includes an e-commerce site with a portal to allow adminstrators to edit the content and style of the site.
`;

const secMasterDescription = `
  A micro-service that my team was resonsible for at Ridgeline was becoming increasingly difficult to scale.
  To simplify its architecture and abstract the interfaces, I led a project that allowed us to delete 100k lines of code,
  replace 64 specific GraphQl endpoints with 4 abstract endpoints, and increased dev productivity by 6x.
`;

const takeDescription = `
  My partner and I built an app that allows a user to point their phone at a rock outside and have the rock climbing routes
  augmented over the rock.
  After we perfected this, we moved on to build out othe rfeatures in the app like a social network for finding climbing partners,
  a guide that fetched its data from REI's Mountain Project, and a "Plan my Day" feature that suggests routes based off of the user's
  climbing ability and location.
`;

const WebView = () => (
  <>
    <br />
    <div>
      <OverlappingDiv
        image={SecurityMaster}
        type="Ridgeline Apps"
        title="Security Master"
        orientation="left"
        technologies={["Python", "GraphQl"]}
        onClick={() => navigate("/projects/security-master")}
        description={secMasterDescription}
      />
      <br />
      <br />
      <OverlappingDiv
        image={Drylander}
        type="Freelance"
        title="Drylander Winery"
        orientation="right"
        technologies={["GCP", "React"]}
        onClick={() => navigate("/projects/drylander")}
        description={drylanderDescription}
      />
      <br />
      <br />
      <OverlappingDiv
        image={Take}
        type="Senior Project"
        title="Take Climbing App"
        orientation="left"
        technologies={["AR", "Swift", "Mountain Project APIs"]}
        onClick={() => navigate("/projects/take")}
        description={takeDescription}
      />
    </div>
  </>
);

const MobileItem = ({
  image,
  type,
  title,
  technologies,
  onClick,
  description,
}) => {
  return (
    <div className="project-item" onClick={onClick}>
      <h2 className="type">{type}</h2>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <Grid container>
        {technologies.map((tech) => {
          return (
            <Grid item key={tech} xs={6}>
              <TechnologyItem text={tech} />
            </Grid>
          );
        })}
      </Grid>
      <img src={image} style={{ paddingTop: 20 }} width="100%" />
    </div>
  );
};

const MobileView = () => (
  <>
    <div className="flex">
      <TextNumber num={3} text="Projects" />
    </div>
    <Grid container spacing={4}>
      <Grid item>
        <MobileItem
          image={SecurityMaster}
          type="Ridgeline Apps"
          title="Security Master"
          technologies={["Python", "GraphQl"]}
          onClick={() => navigate("/projects/security-master")}
          description={secMasterDescription}
        />
      </Grid>
      <Grid item>
        <MobileItem
          image={Drylander}
          type="Freelance"
          title="Drylander Winery"
          technologies={["GCP", "React"]}
          onClick={() => navigate("/projects/drylander")}
          description={drylanderDescription}
        />
      </Grid>
      <Grid item>
        <MobileItem
          image={Take}
          type="Senior Project"
          title="Take Climbing App"
          technologies={["AR", "Swift", "Mountain Project APIs"]}
          onClick={() => navigate("/projects/take")}
          description={takeDescription}
        />
      </Grid>
    </Grid>
  </>
);

export const Projects = ({ section }) => {
  const isMobile = useIsMobile();
  return (
    <div className={section}>{isMobile ? <MobileView /> : <WebView />}</div>
  );
};
