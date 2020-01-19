import { inject, observer } from 'mobx-react';
import CategoryLinks from './List/CategoryLinks';
import List from './List';
import qs from 'query-string';
import React from 'react';

const Movies = (props) => {
  const { match, movieStore } = props;
  const { category } = match.params;
  const type = 'movies';
  const { page = 1 } = qs.parse(props.location.search);
  React.useEffect(() => {
    switch (category) {
      case 'collected':
      case 'watched':
        movieStore.list('movies', category, 'weekly');
        break;
      default:
        movieStore.list('movies', category, null, page);
    }
  }, [category, movieStore, page, type]);

  return (
    <div className="d-flex h-100 movie-list">
      <aside>
        <h1>Movies</h1>
        <p>There are 1,464 people watching 774 movies right now!</p>
        <CategoryLinks type={type} />
      </aside>
      <List store={movieStore} category={category} page={page} type={type} />
    </div>
  );
};

export default inject('movieStore')(observer(Movies));
