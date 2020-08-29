import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import Projects from '../components/projects/Projects';
import ProjectItem from '../components/projects/ProjectItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Projects
      append={
        <ProjectItem
          title="About"
          link="/about"
          image="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
        />
      }
    />
  </Layout>
);

export default IndexPage;
