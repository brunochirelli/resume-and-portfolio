import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { Container } from '@material-ui/core';

const Project = ({ pageContext }) => (
  <div>
    <h1>{pageContext.title}</h1>
    <Container>{parse(pageContext.content)}</Container>
  </div>
);

export default Project;

Project.propTypes = {
  pageContext: PropTypes.object,
};
