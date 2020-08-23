import React from 'react';
import styled from 'styled-components';

import { GitHub, LinkedIn } from '@material-ui/icons';
import { IconButton, Link } from 'gatsby-theme-material-ui';
import { Box } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.25rem 1rem;

  @media screen and (min-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem;
  }
`;

const Logo = styled.div`
  flex-grow: 1;

  .icon {
    width: 30px;
    height: 30px;
    background: black;
    border-radius: 50%;
  }

  @media screen and (min-width: 1000px) {
    flex-grow: 0;

    .icon {
      width: 80px;
      height: 80px;
    }
  }
`;

const Navigation = styled.nav`
  a {
    margin-right: 1rem;
    color: gray;
    transition: all 0.3s ease;

    @media screen and (min-width: 1000px) {
      display: block;
      font-size: 2.5rem;
    }

    &:hover,
    .active {
      color: black;
      text-decoration: none;
    }
  }
`;

const Social = styled.div``;

const Header = () => (
  <header>
    <Wrapper>
      <Logo>
        <Link to="/">
          <div className="icon" />
        </Link>
      </Logo>
      <Navigation>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </Navigation>
      <Social>
        <IconButton>
          <GitHub />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
      </Social>
    </Wrapper>
  </header>
);

export default Header;
