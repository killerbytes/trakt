import { getImage } from 'utils/image';
import { IMAGE } from 'definitions';
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Loading from 'components/common/Loading';
import React from 'react';

const Cast = ({ item, tmdbStore }) => {
  const [image, setImage] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const isMounted = React.useRef();
  React.useEffect(() => {
    isMounted.current = true;
    setLoading(true);
    tmdbStore.getDetails(item.person.ids, 'person').then((res) => {
      if (isMounted.current) {
        setImage(getImage(IMAGE.SIZE.PORTRAIT, res.profile_path));
        setLoading(false);
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [item.person.ids, tmdbStore]);

  return (
    <div className="cast">
      <Link to={`/people/${item.person.ids.slug}`}>
        <div className="poster">{loading ? <Loading /> : <img src={image} alt="" />}</div>
        {item.person.name}
        <div>{item.character}</div>
      </Link>
      {/* {JSON.stringify(item)} */}
    </div>
  );
};

export default inject('tmdbStore')(Cast);
