import { Grid } from "@material-ui/core";
import * as React from "react";
import { ProjectWrapper, ProjectImage } from "../../components/ProjectWrapper";

const Project = () => {
  return (
    <ProjectWrapper title="Take Augmented Reality Rock Climbing App">
      <h2>Some Background</h2>
      <p>
        In the ever growing outdoor rock climbing community, the largest source
        of information for climbing routes are outdated guide books with written
        instructions for everything you’d need to know to safely climb the
        route. This includes hiking directions for approaching the crag, a
        description of each route on the rock, the type of rock, gear necessary
        to safely climb the route, and more. And all of this information is
        communicated with (usually) outdated black and white images and short
        descriptions. If an area is closed for renovation or a route has changed
        because a hold broke off, this information is not available. The largest
        source of digital information for rock climbing is REI’s Mountain
        Project. The information here is fairly well maintained but the user
        experience is less than good and they only address a small portion of
        the issues mentioned above.
      </p>
      <br />
      <h2>Project Summary</h2>
      <p>
        Take is an augmented reality climbing app thats core functionality
        allows a user to point their phone at a rock outside and have the rock
        climbing routes augmented over the rock. After we perfected this, we
        moved on to build out other features in the app like a social network
        for finding climbing partners, a guide that fetched its data from REI’s
        Mountain Project, and a “Plan my Day” feature that suggests routes based
        off of the user’s climbing ability and location.
      </p>
    </ProjectWrapper>
  );
};

export default Project;
