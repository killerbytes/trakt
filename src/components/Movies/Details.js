import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import Cast from './Cast';
import React from 'react';
import styled from 'styled-components';

const MovieDetails = ({ match, movieStore, tmdbStore }) => {
  const slug = match.params.slug;
  const detail = movieStore.summary;
  const [poster, setPoster] = React.useState({});

  const people = movieStore.people.cast.slice(0, 10);
  React.useEffect(() => {
    movieStore.getSummary(slug, { extended: 'full' });
    movieStore.getPeople(slug);
  }, [movieStore, slug]);

  React.useEffect(() => {
    if (detail.ids) {
      tmdbStore.getDetails(detail.ids.tmdb).then((res) => {
        setPoster((prevState) => ({
          ...prevState,
          poster: `https://image.tmdb.org/t/p/w500${res.poster_path}`,
          cover: `https://image.tmdb.org/t/p/w1280${res.backdrop_path}`,
        }));
      });
    }
  }, [movieStore.summary, detail.ids, tmdbStore]);

  return (
    <DetailsStyled>
      <CoverStyled bg={poster.cover} className="cover">
        <div className="stats-overlay">
          <div className="container">
            <div className="stats">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis dolore ad est, autem sint fugit
              praesentium voluptate et hic repellendus tenetur, architecto earum iure eveniet odit quaerat inventore
              quibusdam?
            </div>
          </div>
        </div>
        <div className="container">
          <div className="meta">
            <h1>
              {detail.title} <small>{detail.year}</small>
            </h1>
          </div>
        </div>
      </CoverStyled>
      <div className="main container">
        <aside>
          <img className="poster" src={poster.poster} alt="" />
        </aside>
        <div className="content">
          <div className="info">
            <ul>
              <li>
                <label>Released</label>
                <span>{detail.released}</span>
              </li>
              <li>
                <label>Runtime</label>
                {detail.runtime} mins
              </li>
              <li>
                <label>Directors</label>
                <a href="/people/chris-buck">Chris Buck</a>,{' '}
                <a href="/people/jennifer-lee-6d9f3d57-0441-4031-a147-24f29f40a471">Jennifer Lee</a>
              </li>
              <li>
                <label>Writers</label>
                <a href="/people/chris-buck">Chris Buck</a> <span>(story)</span>
                <span className="writers-more">
                  , <a href="/people/allison-schroeder">Allison Schroeder</a>,{' '}
                  <a href="/people/kristen-anderson-lopez">Kristen Anderson-Lopez</a> <span>(story)</span>,{' '}
                  <a href="/people/jennifer-lee-6d9f3d57-0441-4031-a147-24f29f40a471">Jennifer Lee</a>{' '}
                  <span>(characters)</span>,{' '}
                  <a href="/people/robert-lopez-87923b57-f1ad-492a-b496-62aaf8fc24af">Robert Lopez</a>{' '}
                  <span>(story)</span>, <a href="/people/marc-smith-d8a61604-d751-419b-aa09-2b3346750a13">Marc Smith</a>{' '}
                  <span>(story)</span>
                </span>
              </li>
              <li>
                <label>Country</label>United States
              </li>
              <li>
                <label>Language</label>English
              </li>
              <li>
                <label>Genres</label>
                <span>Animation</span>, <span>Family</span>, <span>Music</span>, <span>Adventure</span>
              </li>
            </ul>
          </div>
          <div className="overview">
            <p>{detail.overview}</p>
            <div className="controls">
              <button>Check In</button>
              <button>Add to History</button>
              <button>Add to Collection</button>
              <button>Add to Watchlist</button>
            </div>
          </div>
          <section className="">
            <ul className="">
              {people.map((i, key) => (
                <Cast key={key} item={i} />
              ))}
            </ul>
          </section>
        </div>
        {/* {JSON.stringify(detail)}
      {JSON.stringify(people)} */}
      </div>
    </DetailsStyled>
  );
};

export default inject('movieStore', 'tmdbStore')(observer(MovieDetails));
const CoverStyled = styled.div`
  position: absolute;
  background-image: url(${(props) => props.bg});
  height: 550px;
  width: 100%;
  background-size: cover;
  background-position: 50% 10%;
  top: 0;
  display: flex;
  flex-direction: column-reverse;
  .stats-overlay {
    background: rgba(0, 0, 0, 0.6);
    .stats {
      padding: 1rem;
      padding-left: 225px;
      color: #fff;
    }
  }
  .meta {
    text-shadow: 0 0 20px #000;
    padding-left: 225px;
    color: ${(props) => props.theme.textColor};
  }
`;
const DetailsStyled = styled.div`
  background-color: #fff;
  .main {
    display: flex;
    padding-top: 18rem;
    position: relative;
    .content {
      padding-top: 14rem;
    }
  }
  aside {
    position: sticky;
    top: 70px;
    align-self: flex-start;
    margin-right: 1.5rem;
    width: 180px;
    min-width: 180px;
    img {
      width: 100%;
      border: 3px solid #fff;
      box-shadow: 0 0 20px 0 #666;
    }
  }
  .overview {
    display: flex;
    .controls {
      margin-left: auto;
      padding: 1rem;
    }
  }
`;
