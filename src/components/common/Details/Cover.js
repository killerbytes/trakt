import Loading from '../Loading';
import React from 'react';
import styled from 'styled-components';

const Cover = ({ details, poster }) => {
  return (
    <CoverStyled bg={poster.isLoading ? '' : poster.cover} className="cover">
      {poster.isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <div className="stats-overlay">
            <div className="container">
              <div className="stats">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis dolore ad est, autem sint fugit
                praesentium voluptate et hic repellendus tenetur, architecto earum iure eveniet odit quaerat inventore
                quibusdam?
              </div>
            </div>
          </div>
          <div className="container">
            <div className="meta">
              <h1>
                {details.title} <small>{details.year}</small>
              </h1>
            </div>
          </div>
        </React.Fragment>
      )}
    </CoverStyled>
  );
};

const CoverStyled = styled.div`
  position: absolute;
  background-image: url('${(props) => props.bg}');
  height: 550px;
  width: 100%;
  background-size: cover;
  background-position: 50% 10%;
  top: 0;
  display: flex;
  flex-direction: column-reverse;
  .stats-overlay {
    background: rgba(0, 0, 0, 0.6);
    .stats {
      padding: 1rem;
      padding-left: 225px;
      color: #fff;
    }
  }
  .meta {
    text-shadow: 0 0 20px #000;
    padding-left: 225px;
    color: ${(props) => props.theme.textColor};
  }
`;

export default Cover;
