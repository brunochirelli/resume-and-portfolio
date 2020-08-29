import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useStaticQuery, graphql } from 'gatsby';
import ProjectItem from './ProjectItem';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Projects = ({ append }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              thumbnail
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      {append || null}
      {edges.map((project, i) => (
        <ProjectItem
          title={project.node.frontmatter.title}
          link={project.node.frontmatter.path}
          image={project.node.frontmatter.thumbnail}
          key={`project-${i}`}
        />
      ))}
    </Wrapper>
  );
};

Projects.propTypes = {
  append: PropTypes.node,
};

export default Projects;
