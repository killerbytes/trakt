import Poster from '../Poster';
import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Aside = ({ details, poster }) => {
  return (
    <AsideStyled className="d-flex">
      <Poster poster={poster} />
      <Title details={details} className="h5 mt-auto d-block d-sm-none" />
    </AsideStyled>
  );
};

export default Aside;

const AsideStyled = styled.aside`
  img {
    width: 70px;
    height: 105px;
  }
`;
