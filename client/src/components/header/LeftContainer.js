import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from '../../utils/logo.png';

const StyledLink = styled(NavLink)`
  text-decoration: none !important;
  color: black;
  &:hover {
    color: #ffc436;
    cursor: pointer;
  }
  &.active {
    color: #ffc436;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  * {
    padding: 1rem;
  }
  flex: 10 1 auto !important;
  img {
    width: 80px;
  }
`;

const LeftContainer = () => {
  return (
    <Container>
      <StyledLink exact to="/">
        <img src={logo}></img>
      </StyledLink>
      <StyledLink to="/RecipePage">레시피</StyledLink>
      <StyledLink to="/DietPage">식단</StyledLink>
    </Container>
  );
};

export default LeftContainer;
