import React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import Projects from '../components/projects/Projects';
import ProjectItem from '../components/projects/ProjectItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { relativePath: { eq: "about.jpg" } }) {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 800, quality: 75) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allFile: { edges } }) => (
        <Projects
          append={
            <ProjectItem title="About" link="/about" image={edges[0].node.childImageSharp.fluid} />
          }
        />
      )}
    />
  </Layout>
);

export default IndexPage;
