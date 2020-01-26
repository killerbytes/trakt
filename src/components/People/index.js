import { getImage } from 'utils/image';
import { IMAGE } from 'definitions';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import Aside from 'components/common/Details/Aside';
import Card from 'components/common/Card';
import Cover from 'components/common/Details/Cover';
import Details from 'components/common/Details';
import React from 'react';
import styled from 'styled-components';

const PeopleSummary = ({ match, peopleStore, tmdbStore }) => {
  const slug = match.params.slug;
  const [poster, setPoster] = React.useState({ isLoading: false });

  React.useEffect(() => {
    peopleStore.get(slug, { extended: 'full' });
    peopleStore.getCredits(slug, 'movies', { extended: 'full' }).then((res) => {
      const randomId = Math.floor(Math.random() * Math.floor(res.length));
      const type = res[randomId].movie ? res[randomId].movie : res[randomId].show;
      tmdbStore.getDetails(type.ids).then((res) => {
        setPoster((prevState) => ({
          ...prevState,
          isLoading: false,
          cover: getImage(IMAGE.SIZE.FULL, res.backdrop_path),
        }));
      });
    });
  }, [peopleStore, tmdbStore, slug]);

  React.useEffect(() => {
    setPoster((prevState) => ({ ...prevState, isLoading: true }));
    if (peopleStore.summary.ids) {
      tmdbStore.getDetails(peopleStore.summary.ids, 'person').then((res) => {
        setPoster((prevState) => ({
          ...prevState,
          isLoading: false,
          path: getImage(IMAGE.SIZE.PORTRAIT, res.profile_path),
        }));
      });
    }
  }, [tmdbStore, peopleStore.summary.ids]);

  const details = peopleStore.summary;
  return (
    <Details>
      <Cover details={details} poster={poster} />
      <div className="main container">
        <Aside poster={poster} />
        <div className="content">
          <h1>{details.name}</h1>
          <p>{details.biography}</p>
          <CreditStyled className="credits">
            {peopleStore.credits.map((i, key) => (
              <Card category={i.movie ? 'movie' : 'show'} item={i} key={key} />
            ))}
          </CreditStyled>
        </div>
      </div>
    </Details>
  );
};

export default inject('peopleStore', 'tmdbStore')(observer(PeopleSummary));

const CreditStyled = styled.div`
  grid-template-columns: repeat(5, 1fr);
  display: grid;
`;
