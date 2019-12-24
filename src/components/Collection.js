import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import React from 'react';

const Collection = ({ collectionStore }) => {
  React.useEffect(() => {
    collectionStore.getCollection();
  }, [collectionStore]);
  console.log(toJS(collectionStore.items));
  return (
    <div>
      <ul>
        {collectionStore.items.map((i, key) => (
          <li key={key}>
            {i.movie.title} <small>{i.movie.year}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default inject('collectionStore')(observer(Collection));
