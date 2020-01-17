import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Loading from 'components/common/Loading';
import React from 'react';
import styled from 'styled-components';

const Cast = ({ item, tmdbStore }) => {
  const [image, setImage] = React.useState();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    tmdbStore.getDetails(item.person.ids.tmdb, 'person').then((res) => {
      setImage(`https://image.tmdb.org/t/p/w185${res.profile_path}`);
      setLoading(false);
    });
  }, [item.person.ids.tmdb, tmdbStore]);
  return (
    <CastStyled>
      <Link to={`/people/${item.person.ids.slug}`}>
        <div className="poster">{loading ? <Loading /> : <img src={image} alt="" />}</div>
        {item.person.name}
        <div>{item.character}</div>
      </Link>
      {/* {JSON.stringify(item)} */}
    </CastStyled>
  );
};

export default inject('tmdbStore')(Cast);

const CastStyled = styled.li`
  .poster {
    display: flex;
    width: 84px;
    min-height: 125px;
    img {
      width: 100%;
    }
  }
  a {
    color: ${(props) => props.theme.textColorGray};
  }
`;
