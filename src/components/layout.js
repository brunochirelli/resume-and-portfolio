import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './header';
// import Footer from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }

  header {
    width: 100%;
    background: white;

    @media screen and (min-width: 1000px) {
      width: 400px;
      height: 100vh;
    }
  }

  main {
    flex-grow: 1;
    width: 100%;
  }
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <main>{children}</main>
    {/* <Footer>Footer</Footer> */}
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
