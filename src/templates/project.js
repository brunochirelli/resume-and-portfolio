import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { Container, Typography } from '@material-ui/core';
import Layout from '../components/layout/layout';

const Project = ({ pageContext }) => (
  <Layout>
    <Container>
      <Typography variant="h2" component="h1">
        {pageContext.title}
      </Typography>
      {parse(pageContext.content)}
    </Container>
  </Layout>
);

export default Project;

Project.propTypes = {
  pageContext: PropTypes.object,
};
