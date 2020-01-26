import { getImage } from 'utils/image';
import { IMAGE } from 'definitions';
import { inject } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import Loading from 'components/common/Loading';
import React from 'react';
import styled from 'styled-components';

const Card = ({ category, item, tmdbStore, isPoster = true }) => {
  const data = item[category] ? item[category] : item;
  const watchers =
    (item.watchers && `${item.watchers} people watching`) || (item.watcher_count && `${item.watcher_count} watchers`);
  const plays = item.play_count;
  const [poster, setPoster] = React.useState({
    isLoading: true,
  });
  const isMounted = React.useRef();

  React.useEffect(() => {
    isMounted.current = true;
    setPoster((prevState) => ({ ...prevState, isLoading: true }));
    if (data.ids) {
      tmdbStore.getDetails(data.ids, category).then((res) => {
        if (isMounted.current) {
          setPoster((prevState) => ({
            ...prevState,
            isLoading: false,
            path: isPoster
              ? getImage(IMAGE.SIZE.PORTRAIT, res.poster_path)
              : getImage(IMAGE.SIZE.LANDSCAPE, res.backdrop_path),
          }));
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [data.ids, category, isPoster, tmdbStore]);

  return (
    <CardSyled className="card">
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
    </CardSyled>
  );
};

export default withRouter(inject('tmdbStore')(Card));

const CardSyled = styled.div`
  border: 0;
  border-radius: 0;
  img {
    width: 100%;
  }
`;
