import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import React from 'react';

const PeopleSummary = ({ match, peopleStore }) => {
  const slug = match.params.slug;
  const summary = peopleStore.summary;
  const cast = peopleStore.credits.cast.splice(0, 10);
  React.useEffect(() => {
    peopleStore.get(slug, { extended: 'full' });
    peopleStore.getCredits(slug, 'movies', { extended: 'full' });
  }, [peopleStore, slug]);

  return (
    <div>
      Summary
      <h1>{summary.name}</h1>
      <p>{summary.biography}</p>
      {cast.map((i, key) => (
        <div key={key}>
          <Link to={`/movies/details/${i.movie.ids.slug}`}>{i.movie.title}</Link> - {i.character}
        </div>
      ))}
    </div>
  );
};

export default inject('peopleStore')(observer(PeopleSummary));
