import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { Container, Typography, Button } from '@material-ui/core';
import Layout from '../components/layout/layout';

const Project = ({ pageContext }) => (
  <Layout>
    <Container>
      <Typography variant="h2" component="h1">
        {pageContext.title}
      </Typography>
      <Button
        href={pageContext.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
      >
        Live Project
      </Button>
      <Button
        href={pageContext.repository}
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
      >
        Respository
      </Button>
      {parse(pageContext.content)}
    </Container>
  </Layout>
);

export default Project;

Project.propTypes = {
  pageContext: PropTypes.object,
};
