import { Grid } from "@material-ui/core";
import * as React from "react";
import { ProjectWrapper, ProjectImage } from "../../components/ProjectWrapper";
import image0 from "../../images/projects/security-master-0.png";
import image1 from "../../images/projects/security-master-1.png";

const Project = () => {
  return (
    <ProjectWrapper title="Security Master Re-Architecture">
      <h2>Some Background</h2>
      <p>
        One of the services that my team was responsible for at Ridgeline was
        the Security Master service. A security is a tradable financial asset.
        Firms that our company target could have anywhere between a few hundred
        to several thousand securities in their portfolios. At the time I built
        this project, our team supported 16 different security types where each
        type has its own set of complex rules that are validated by the 50+
        attributes that make up that security.
        <br />
        <br />
        When I pitched this service's re-architecture, each of the 16 security
        types had four APIs - one create, one edit, and two fetches. The math is
        pretty easy - 16 security types * 4 APIs = 64 APIs. In addition to the
        64 APIs, each security has its own persistence model. Maintaining 64
        APIs and 64 persistence models is difficult at a startup like Ridgeline
        where a PM will ask for a new attribute across all security types every
        few weeks.
        <br />
        <br />
        Time to implement 1 new attribute across all instrument types and
        publicly release those APIs was about 1 - 2 devs entire month of work.
        Clearly this was a problem that needed to be addressed.
      </p>

      <br />
      <br />

      <h2>Project Summary</h2>
      <p>
        To simplify this architecture and address the pain points above, I
        utilized GraphQl. Each of our APIs has a contract defined by GraphQl and
        enforced by our cloud teams' infastructure. Where previously we had 64
        APIs that each pointed to 64 different GraphQl endpoints, the new
        architecture only has 4 GraphQl endpoints - one create, one edit, and
        two fetches. Additionally, where the previous implementation had 16
        persistence models that shared 80% of the same fields, the new
        implementation ony has 1 abstract model.
        <br />
        <br />
        The difference in implementation looks small at face value but under the
        hood saves us a significant amount of effort. Illustrated below is what
        the old GraphQl schema (left) look like against the newly abstracted
        GraphQl schema (right).
      </p>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <ProjectImage src={image0} />
        </Grid>
        <Grid item xs={6}>
          <ProjectImage src={image1} />
        </Grid>
      </Grid>
      <br />
      <br />
      <p>
        This is all made possible through GraphQl's validation schema.
        Validation is enforced at the GraphQl level, meaning that by the time a
        payload finds its way to our service code, most validation rules have
        already been run. Any addition validation can still be run and assuming
        it passes, that payload can be applied to the 1 abstract persistence
        model and stored in the database.
      </p>
      <br />
      <br />
      <h2>Results</h2>
      <p>The result of this project can be measured in several ways:</p>
      <ul>
        <li>Deletion of over 100k lines of code.</li>
        <li>Deletion of 60 GraphQl endpoints.</li>
        <li>
          Reducing time to add a new attribute across all securities from 1-2
          months to 1 week.
        </li>
        <li>
          Reducing time to support a new security type from 1 month to 1 week.
        </li>
      </ul>
    </ProjectWrapper>
  );
};

export default Project;
