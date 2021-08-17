import * as React from "react";
import { NavBar } from "../containers/NavBar";
import { Splash } from "../containers/Splash";
import { AboutMe } from "../containers/AboutMe";
import { Experience } from "../containers/Experience";
import { Projects } from "../containers/Projects";
import { Contact } from "../containers/Contact";
import { FullHeight } from "../components/FullHeight";
import { graphql } from "gatsby";
import "../styles/App.scss";

const App = ({ data }) => {
  console.log(data);
  return (
    <div className="wrapper">
      <div className="content">
        <NavBar />
        <FullHeight minHeight="100vh">
          <Splash section="section-1" />
        </FullHeight>
        <FullHeight>
          <AboutMe section="section-2" />
        </FullHeight>
        <FullHeight minHeight="100vh">
          <Experience section="section-3" />
        </FullHeight>
        <FullHeight>
          <Projects section="section-4" />
        </FullHeight>
        <FullHeight paddingBottom="100px" paddingTop="100px">
          <Contact section="section-5" />
        </FullHeight>
      </div>
    </div>
  );
};

export default App;

export const pageQuery = graphql`
  query {
    projects: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
