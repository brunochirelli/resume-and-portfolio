import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

const Wrapper = styled(Link)`
  width: 100%;
  height: 30vh;
  background-size: cover;
  filter: grayscale();
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    text-decoration: none;
    text-shadow: 2px 2px 2px black;
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
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
`;

const ProjectItem = ({ title = 'Title', link = '/', image }) => (
  <Wrapper to={link}>
    <StyledBackgroundImage
      fluid={typeof image === 'object' ? image : null}
      src={typeof image === 'string' ? image : null}
    >
      <Title>{title}</Title>
    </StyledBackgroundImage>
  </Wrapper>
);

export default ProjectItem;

ProjectItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.any,
};
