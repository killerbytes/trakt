import Loading from '../Loading';
import React from 'react';
import styled from 'styled-components';

const Cover = ({ details, poster, children }) => {
  return (
    <CoverStyled bg={poster.isLoading ? '' : poster.cover} className="cover">
      {children}
    </CoverStyled>
  );
};

const CoverStyled = styled.div`
  width: 100%;
  height: 350px;
  background-image: url('${(props) => props.bg}');
  z-index: -1;
  top: 0;
  display: flex;
  flex-direction: column-reverse;
  background-size: cover;
  background-position: 50% 10%;
  margin-top: -45px;
  .stats-overlay {
    background: rgba(0, 0, 0, 0.6);
    .stats {
      padding: 1rem;
      /* padding-left: 225px; */
      /* color: #fff; */
    }
  }
  /*
  .meta {
    text-shadow: 0 0 20px #000;
    padding-left: 225px;
    color: ${(props) => props.theme.textColor};
  } */
`;

export default Cover;
