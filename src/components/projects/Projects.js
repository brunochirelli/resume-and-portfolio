import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useStaticQuery, graphql, StaticQuery } from 'gatsby';
import ProjectItem from './ProjectItem';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Projects = ({ append }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                path
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => (
      <Wrapper>
        {append || null}
        {edges.map((project, i) => (
          <ProjectItem
            title={project.node.frontmatter.title}
            link={project.node.frontmatter.path}
            image={project.node.frontmatter.thumbnail.childImageSharp.fluid}
            key={`project-${i}`}
          />
        ))}
      </Wrapper>
    )}
  ></StaticQuery>
);

Projects.propTypes = {
  append: PropTypes.node,
};

export default Projects;
