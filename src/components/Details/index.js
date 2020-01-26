import { getImage } from 'utils/image';
import { IMAGE } from 'definitions';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import Aside from 'components/common/Details/Aside';
import Cast from 'components/common/Cast';
import Cover from 'components/common/Details/Cover';
import Details from 'components/common/Details';
import React from 'react';

const TypeDetails = ({ match, movieStore, showStore, tmdbStore }) => {
  const { type, slug } = match.params;
  const key = type === 'movies' ? 'movie' : 'show';
  const store = type === 'movies' ? movieStore : showStore;
  const details = store.summary;
  const [poster, setPoster] = React.useState({ isLoading: true });

  const people = store.people.cast.slice(0, 10);
  React.useEffect(() => {
    store.getSummary(slug, { extended: 'full' });
    store.getPeople(slug);
  }, [store, slug]);

  React.useEffect(() => {
    setPoster({ isLoading: true });
    if (store.summary.ids) {
      tmdbStore
        .getDetails(store.summary.ids, key)
        .then((res) => {
          setPoster({
            isLoading: false,
            path: getImage(IMAGE.SIZE.PORTRAIT, res.poster_path),
            cover: getImage(IMAGE.SIZE.FULL, res.backdrop_path),
          });
        })
        .catch((err) => {
          setPoster({
            isLoading: false,
            path: err.poster_path,
            cover: err.backdrop_path,
          });
        });
    }
  }, [store.summary, tmdbStore, key]);

  return (
    <Details>
      <Cover details={details} poster={poster} />
      <div className="main container">
        <Aside poster={poster} />
        <div className="content">
          <div className="info">
            <ul>
              <li>
                <label>Released</label>
                <span>{details.released}</span>
              </li>
              <li>
                <label>Runtime</label>
                {details.runtime} mins
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
            <p>{details.overview}</p>
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
    </Details>
  );
};

export default inject('movieStore', 'showStore', 'tmdbStore')(observer(TypeDetails));
