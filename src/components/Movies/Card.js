import { inject } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import { toJS } from 'mobx';
import React from 'react';
import styled from 'styled-components';

const Card = ({ match, item, tmdbStore }) => {
  const { type, category } = match.params;
  const key = type === 'movies' ? 'movie' : 'show';
  const data = item[key] ? item[key] : item;

  const watchers = item.watchers;
  const [poster, setPoster] = React.useState();
  React.useEffect(() => {
    if (data.ids) {
      tmdbStore.getDetails(data.ids.tmdb, key).then((res) => {
        setPoster(`https://image.tmdb.org/t/p/w780${res.backdrop_path}`);
      });
    }
  }, [data.ids, tmdbStore]);
  return (
    <CardStyled>
      <Link to={`/movies/details/${data.ids.slug}`}>
        <img src={poster} alt="" />
        <div className="title">
          {watchers && <div className="watchers">{`${watchers} people watching`}</div>}
          <div>
            <strong>{data.title}</strong>
            <small>{data.year}</small>
          </div>
        </div>
      </Link>
      <div className="actions">
        <i className="fas fa-check"></i>
        <i className="fas fa-align-left"></i>
      </div>
    </CardStyled>
  );
};

export default withRouter(inject('tmdbStore')(Card));

const CardStyled = styled.div`
  position: relative;
  a {
    color: #fff;
    display: block;
    position: relative;
  }
  .title {
    padding: 0.5rem;
    font-size: 18px;
    position: absolute;
    bottom: 0;
    text-shadow: 0 0 20px #000;
    .watchers {
      display: inline-block;
      font-size: 11px;
      padding: 0.1rem 0.2rem;
      background-color: ${(props) => props.theme.primary};
    }
    small {
      margin-left: 0.3rem;
      color: ${(props) => props.theme.textColorGray};
    }
  }
  .actions {
    padding: 0.5rem;
    i {
      margin-right: 1rem;
    }
  }
  img {
    width: 100%;
  }
`;
