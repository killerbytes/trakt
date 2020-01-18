import { inject } from 'mobx-react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { PATH } from 'definitions';
import { toJS } from 'mobx';
import Card from './Card';
import qs from 'query-string';
import React from 'react';
import styled from 'styled-components';

const Movies = (props) => {
  const { match, movieStore, showStore, history } = props;
  const { type, category } = match.params;
  const store = type === 'movies' ? movieStore : showStore;
  const { page = 1 } = qs.parse(props.location.search);
  const pagination = movieStore.pagination;
  React.useEffect(() => {
    switch (category) {
      case 'collected':
      case 'watched':
        store.list(category, 'weekly');
        break;
      default:
        store.list(category, null, page);
    }
  }, [category, store, page, type]);

  return (
    <div className="d-flex h-100 movie-list">
      <aside>
        Movies
        <ul>
          <li>
            <NavLink to={`/${PATH.movies}/trending`}>Trending</NavLink>
          </li>
          <li>
            <NavLink to={`/${PATH.movies}/popular`}>Popular</NavLink>
          </li>
          <li>
            <NavLink to={`/${PATH.movies}/watched`}>Watched</NavLink>
          </li>
          <li>
            <NavLink to={`/${PATH.movies}/collected`}>Collected</NavLink>
          </li>
          <li>
            <NavLink to={`/${PATH.movies}/anticipated`}>Anticipated</NavLink>
          </li>
          <li>
            <NavLink to={`/${PATH.movies}/boxoffice`}>Box Office</NavLink>
          </li>
        </ul>
      </aside>
      <div className="main">
        <div className="grid-main d-grid">{store.LIST && store.LIST.map((i, key) => <Card item={i} key={key} />)}</div>
        <button
          disabled={page === 1}
          onClick={() =>
            history.push({
              pathname: `/${type}/${category}`,
              search: `?page=${parseInt(page) - 1}`,
            })
          }
        >
          Previous page
        </button>
        {console.log(page, pagination.pageCount)}
        <button
          disabled={parseInt(page) >= parseInt(pagination.pageCount)}
          onClick={() =>
            history.push({
              pathname: `/${type}/${category}`,
              search: `?page=${parseInt(page) + 1}`,
            })
          }
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default inject('movieStore', 'showStore')(observer(Movies));
const AsideStyled = styled.aside`
  background-color: #1d1d1d;
  min-width: 300px;
  padding: 1rem;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${(props) => props.theme.textColor};
    font-size: 22px;
  }
  a.active {
    color: ${(props) => props.theme.primary};
  }
`;

const MainStyled = styled.div`
  flex: 1;
`;

const GridStyled = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
