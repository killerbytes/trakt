import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import { withRouter } from 'react-router-dom';
import Card from 'components/common/Card';
import React from 'react';

const Movies = ({ store, category, type, page, history }) => {
  return (
    <div className="d-flex h-100 movie-list">
      <div className="main">
        <div className="grid-main d-grid">
          {store.LIST.map((i, key) => (
            <Card isPoster={false} category={i.movie ? 'movie' : 'show'} item={i} key={key} />
          ))}
        </div>
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
        <button
          disabled={parseInt(page) >= parseInt(store.pagination.pageCount)}
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

export default inject('movieStore', 'showStore')(withRouter(observer(Movies)));
