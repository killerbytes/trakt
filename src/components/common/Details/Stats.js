import React from 'react';
import styled from 'styled-components';
const Stats = () => {
  return (
    <StatsStyled className="container">
      <div className="row">
        <div className="col">
          <ul className=" d-grid">
            <li className="d-flex">
              <i className="fas fa-heart"></i>
              <div>
                <strong>71%</strong>
                5.0k votes
              </div>
            </li>
            <li className="d-flex">
              <i className="far fa-heart"></i>
              <div>
                <strong>Rate this movie</strong>
                What did you think?
              </div>
            </li>
          </ul>
          <ul className=" d-grid">
            <li>
              <strong>118k </strong>
              watchers
            </li>
            <li>
              <strong>157k</strong>
              plays
            </li>
            <li>
              <strong>157k</strong>
              collected
            </li>
            <li>
              <strong>157k</strong>
              comments
            </li>
            <li>
              <strong>157k</strong>
              lists
            </li>
          </ul>
        </div>
      </div>
    </StatsStyled>
  );
};

export default Stats;

const StatsStyled = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.gray500};
  line-height: 1;
  background-color: rgba(0, 0, 0, 0.7);
  ul {
    list-style-type: none;
    padding: 0.5rem 0;
    margin: 0;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
    border-top: 1px solid ${(props) => props.theme.gray800};
  }
  i {
    font-size: 28px;
    margin-right: 0.5rem;
  }
  .fas.fa-heart {
    color: #9e2424;
  }
  strong {
    display: block;
    font-size: 16px;
    color: ${(props) => props.theme.white};
  }
  .stats {
  }
`;
