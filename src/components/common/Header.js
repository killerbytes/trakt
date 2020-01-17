import { NavLink } from 'react-router-dom';
import { PATH } from 'definitions';
import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderStyled>
    <nav>
      <NavLink to={`/${PATH.shows}/trending`}>TV</NavLink>
      <NavLink to={`/${PATH.movies}`}>Movies</NavLink>
      <NavLink to="/calendars">Calendar</NavLink>
    </nav>
  </HeaderStyled>
);
export default Header;

const HeaderStyled = styled.header`
  background: rgba(0, 0, 0, 0.6);
  position: sticky;
  top: 0;
  z-index: 100;
  nav {
    text-align: center;
    a {
      display: inline-block;
      padding: 1rem;
      color: #fff;
      text-decoration: none;
      &:hover,
      &.active {
        color: ${(props) => props.theme.primary};
      }
    }
  }
`;
