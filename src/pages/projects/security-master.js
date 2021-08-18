import * as React from "react";
import { ProjectWrapper } from "../../components/ProjectWrapper";

const Project = () => {
  return (
    <ProjectWrapper title="Security Master Re-Architecture">
      <p>
        Unfortunately I can't write much about this project without disclosing
        company information but I'm happy to verbally discuss it.
      </p>

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
