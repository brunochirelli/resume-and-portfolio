import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const Wrapper = styled(Link)`
  width: 100%;
  height: 30vh;
  background: url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
  filter: grayscale();
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    text-decoration: none;
    filter: initial;
  }

  @media screen and (min-width: 650px) {
    width: 50%;
  }

  @media screen and (orientation: landscape) {
    height: 50vh;
  }
`;

const Title = styled(Typography)`
  padding: 1rem;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: none;
    text-shadow: 2px 2px 2px black;
  }
`;

const ProjectItem = ({
  title = 'Title',
  link = '/',
  image = 'https://via.placeholder.com/500',
}) => (
  <Wrapper to={link} image={image}>
    <Box>
      <Title>{title}</Title>
    </Box>
  </Wrapper>
);

export default ProjectItem;

ProjectItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
};
