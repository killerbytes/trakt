import { NavLink, withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const CategoryLinks = ({ type }) => {
  return (
    <NavStyled>
      <NavLink to={`/${type}/trending`}>Trending</NavLink>
      <NavLink to={`/${type}/popular`}>Popular</NavLink>
      <NavLink to={`/${type}/watched`}>Watched</NavLink>
      <NavLink to={`/${type}/collected`}>Collected</NavLink>
      <NavLink to={`/${type}/anticipated`}>Anticipated</NavLink>
      {type === 'movies' && <NavLink to={`/${type}/boxoffice`}>Box Office</NavLink>}
    </NavStyled>
  );
};

export default withRouter(CategoryLinks);

const NavStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    margin-right: 0.5rem;
    &.active {
      color: ${(props) => props.theme.primary};
    }
  }
`;
