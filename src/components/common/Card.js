import { inject } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import Loading from 'components/common/Loading';
import React from 'react';

const Card = ({ category, item, tmdbStore }) => {
  const data = item[category] ? item[category] : item;
  const watchers =
    (item.watchers && `${item.watchers} people watching`) || (item.watcher_count && `${item.watcher_count} watchers`);
  const plays = item.play_count;
  const [poster, setPoster] = React.useState({
    isLoading: true,
  });
  React.useEffect(() => {
    setPoster((prevState) => ({ ...prevState, isLoading: true }));
    if (data.ids) {
      tmdbStore.getDetails(data.ids, category).then((res) => {
        if (res.backdrop_path) {
          setPoster((prevState) => ({
            ...prevState,
            isLoading: false,
            path: `https://image.tmdb.org/t/p/w780${res.backdrop_path || res.poster_path}`,
          }));
        } else {
          setPoster((prevState) => ({
            ...prevState,
            isLoading: false,
            path: 'https://via.placeholder.com/780x439?text=No Image',
          }));
        }
      });
    }
  }, [data.ids, category, tmdbStore]);

  return (
    <div className="card">
      <Link to={`/${category === 'movie' ? 'movies' : 'shows'}/details/${data.ids.slug}`}>
        {poster.isLoading ? <Loading /> : <img src={poster.path} alt="" />}
        <div className="title">
          {watchers && <div className="watchers">{watchers}</div>}
          {` `}
          {plays && <div className="watchers">{plays} plays</div>}
          <div>
            <strong>{data.title}</strong>
            <small>{data.year}</small>
          </div>
        </div>
      </Link>
      <div className="actions">
        <i className="fas fa-check"></i>
        <i className="fas fa-align-left"></i>
        <i className="fas fa-align-left"></i>
        <span>
          <i className="fas fa-heart"></i> {`${data.rating.toFixed(1) * 10}%`}
        </span>
      </div>
    </div>
  );
};

export default withRouter(inject('tmdbStore')(Card));
