import { getImage } from 'utils/image';
import { IMAGE } from 'definitions';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import Actors from 'components/common/Details/Actors';
import Aside from 'components/common/Details/Aside';
import Cover from 'components/common/Details/Cover';
import Details from 'components/common/Details';
import Info from 'components/common/Details/Info';
import Overview from 'components/common/Details/Overview';
import React from 'react';
import Stats from 'components/common/Details/Stats';
import Title from 'components/common/Details/Title';

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
      <Cover details={details} poster={poster}>
        <section>
          <div className="container mb-1">
            <Aside details={details} poster={poster} />
            <div className="content">
              <Title details={details} className="d-none d-sm-block" />
            </div>
          </div>
          <Stats />
        </section>
      </Cover>
      <div className="container mb-3">
        <Info details={details} />
        <Overview details={details} />
      </div>
      <Actors people={people} />
    </Details>
  );
};

export default inject('movieStore', 'showStore', 'tmdbStore')(observer(TypeDetails));
