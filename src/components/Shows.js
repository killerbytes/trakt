import { inject, observer } from 'mobx-react';
import CategoryLinks from './List/CategoryLinks';
import List from './List';
import qs from 'query-string';
import React from 'react';

const Shows = (props) => {
  const { match, showStore } = props;
  const { category } = match.params;
  const { page = 1 } = qs.parse(props.location.search);
  const type = 'shows';
  React.useEffect(() => {
    switch (category) {
      case 'collected':
      case 'watched':
        showStore.list('shows', category, 'weekly');
        break;
      default:
        showStore.list('shows', category, null, page);
    }
  }, [category, showStore, page, type]);

  return (
    <div className="d-sm-flex h-100">
      <aside className="col text-white">
        <h1>TV Shows</h1>
        <p>The most popular shows for all time.</p>
        <CategoryLinks type={type} />
      </aside>
      <List store={showStore} category={category} page={page} type={type} />
    </div>
  );
};

export default inject('showStore')(observer(Shows));
