import { Link, NavLink } from 'react-router-dom';
import { PATH } from 'definitions';
import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderStyled>
    <div className="search position-absolute">
      <i className="fas fa-search"></i>
    </div>
    <div className="d-flex">
      <nav className="flex-grow-1 text-right mr-3">
        <NavLink to={`/${PATH.shows}`}>TV</NavLink>
        <NavLink to={`/${PATH.movies}`}>Movies</NavLink>
        <Link className="text-light" to="/">
          Calendar
        </Link>
      </nav>
      <div className="logo">
        <img className="mt-2 position-absolute" width="65" src="/assets/trakt@2x.png" alt="Header@2x"></img>
      </div>
      <nav className="flex-grow-1 ml-3">
        <Link className="text-light" to="/">
          Discover
        </Link>
      </nav>
    </div>
    <div className="user position-absolute">
      <img src="" alt="" className="avatar" />
      User
    </div>
  </HeaderStyled>
);
export default Header;

const HeaderStyled = styled.header`
  background: rgba(0, 0, 0, 0.6);
  position: sticky;
  top: 0;
  z-index: 100;
  nav {
    flex-basis: 0;
    a {
      display: inline-block;
      padding: 0.9rem 1rem;
      color: #fff;
      text-decoration: none;
      &:hover,
      &.active {
        color: ${(props) => props.theme.primary};
      }
    }
  }
  .logo {
    width: 65px;
  }
`;
