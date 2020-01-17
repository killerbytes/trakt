import { inject } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { PATH } from 'definitions';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import React from 'react';
import styled from 'styled-components';

const Movies = ({ match, movieStore, showStore }) => {
  const { type, category } = match.params;
  const store = type === 'movies' ? movieStore : showStore;
  const [page, setPage] = React.useState(1);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });

  React.useEffect(() => {
    switch (category) {
      case 'collected':
      case 'watched':
        store.list(category, 'weekly');
        break;
      default:
        store.list(category, null, store.page);
    }
  }, [category, type]);

  // React.useEffect(() => {
  //   if (inView) {
  //     movieStore.page = movieStore.page + 1;
  //   }
  // }, [inView]);
  return (
    <div className="d-flex h-100">
      <AsideStyled>
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
      </AsideStyled>
      <MainStyled className="main">
        <GridStyled className="d-grid">
          {store.LIST && store.LIST.map((i, key) => <Card item={i} key={key} />)}
        </GridStyled>
        <button onClick={() => setPage((prevState) => prevState + 1)}>Next</button>
        <h1>{page}</h1>
      </MainStyled>
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
