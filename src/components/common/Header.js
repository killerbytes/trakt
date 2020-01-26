import { Link, NavLink } from 'react-router-dom';
import { PATH } from 'definitions';
import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <HeaderStyled className={classNames({ 'is-collapsed': collapsed })}>
      <div className="d-flex align-items-center">
        <button className="search text-white position-absolute">
          <i className="fas fa-search"></i>
        </button>
        <div className="logo-wrapper">
          {/* <nav className="flex-grow-1 text-right mr-3">
          <NavLink to={`/${PATH.shows}`}>TV</NavLink>
          <NavLink to={`/${PATH.movies}`}>Movies</NavLink>
          <Link className="text-light" to="/">
            Calendar
          </Link>
        </nav> */}
          <div className="logo">
            <img src="/assets/trakt@2x.png" alt="Header@2x"></img>
          </div>
          {/* <nav className="flex-grow-1 ml-3">
          <Link className="text-light" to="/">
            Discover
          </Link>
        </nav> */}
        </div>
        <div className="user-actions position-absolute">
          <button onClick={() => setCollapsed(!collapsed)} className="btn-clear menu text-white mr-3">
            <i className="fa fa-bars "></i>
          </button>
          <button className="btn-clear text-white">
            <i className="fas fa-user-circle"></i>
          </button>
        </div>
      </div>
      <div className="menu-content">
        <div className="site-name text-white">TRAKT</div>
        <nav>
          <NavLink to={`/${PATH.shows}`}>TV</NavLink>
          <NavLink to={`/${PATH.movies}`}>Movies</NavLink>
          <Link className="text-light" to="/">
            Calendar
          </Link>
          <Link className="text-light" to="/">
            Discover
          </Link>
        </nav>
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  height: 45px;
  align-items: center;
  * {
    transition: all 0.3s ease-out;
  }
  .logo-wrapper {
    width: 100%;
    .logo {
      margin: auto;
      position: relative;
      width: 50px;
      height: 50px;
      img {
        position: absolute;
        width: 100%;
        top: 0.5rem;
      }
    }
  }
  .fa-search {
    font-size: 16px;
  }
  .user-actions {
    z-index: 100;
    font-size: 22px;
    right: 0.8rem;
  }
  button.search {
    border: 0;
    background: none;
    padding: 0.5rem 0.8rem;
  }
  button.menu {
  }
  .menu-content {
    transform: translateY(-100%);
    position: absolute;
    width: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);

    .site-name {
      margin-top: 2px;
      font-weight: bold;
      font-size: 20px;
      margin-left: 3rem;
      height: 45px;
      display: flex;
      align-items: center;
    }
    nav {
      flex-basis: 0;
      text-align: center;
      a {
        display: inline-block;
        padding: 0.5rem;
        color: #fff;
        text-decoration: none;
        &:hover,
        &.active {
          color: ${(props) => props.theme.primary};
        }
      }
    }
  }
  &.is-collapsed {
    .menu-content {
      transform: translateY(0);
    }
    button.search {
      opacity: 0;
    }
    .logo-wrapper {
      width: 0;
      .logo {
        transform: scale(0.6);
        img {
          top: 0;
        }
      }
    }
  }
`;
