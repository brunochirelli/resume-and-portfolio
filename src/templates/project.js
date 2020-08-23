import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { Container } from '@material-ui/core';
import Layout from '../components/layout';

const Project = ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    {parse(pageContext.content)}
  </Layout>
);

export default Project;

Project.propTypes = {
  pageContext: PropTypes.object,
};
