import Cast from 'components/common/Cast';
import React from 'react';
import styled from 'styled-components';

const Actors = ({ people }) => {
  return (
    <SectionStyled>
      {people.map((i, key) => (
        <Cast key={key} item={i} />
      ))}
    </SectionStyled>
  );
};

export default Actors;

const SectionStyled = styled.section`
  display: flex;
  overflow: auto;
  font-size: 12px;
  .poster {
    width: 90px;
    height: 135px;
    img {
      width: 100%;
    }
  }
  margin-bottom: 10rem;
`;
