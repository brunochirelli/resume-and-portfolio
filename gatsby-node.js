const path = require('path');
const { report } = require('process');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(`src/templates/project.js`);

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
            html
          }
        }
      }
    }
  `);

  if (result.errors) report.panicOnBuild('Erro na query GraphQL de projetos');

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: { title: node.frontmatter.title, content: node.html },
    });
  });
};

/* eslint-disable no-template-curly-in-string */
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-transform-imports',
    options: {
      '@material-ui/core': {
        transform: '@material-ui/core/esm/${member}',
        preventFullImport: true,
      },
      '@material-ui/icons': {
        transform: '@material-ui/icons/esm/${member}',
        preventFullImport: true,
      },
    },
  });
};
