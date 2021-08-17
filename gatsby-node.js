const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     query {
//       projects: allMarkdownRemark {
//         edges {
//           node {
//             id
//             frontmatter {
//               title
//               id
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
//   }

//   const projects = result.data.projects.edges;

//   projects.forEach(({ node }, index) => {
//     createPage({
//       path: `/project${node.frontmatter.slug}`,
//       component: path.resolve(`./src/pages/project.js`),
//       context: { id: node.id },
//     });
//   });
// };

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: `/project${value}`,
    });
  }
};
