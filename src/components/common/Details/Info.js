import { titleize } from 'utils/formatters';
import React from 'react';
import styled from 'styled-components';

const Info = ({ details }) => {
  return (
    <InfoStyled>
      <ul>
        <li>
          <label>Released</label>
          <span>{details.released}</span>
        </li>
        <li>
          <label>Runtime</label>
          {details.runtime} mins
        </li>
        {/* <li>
        <label>Directors</label>
        <a href="/people/chris-buck">Chris Buck</a>,{' '}
        <a href="/people/jennifer-lee-6d9f3d57-0441-4031-a147-24f29f40a471">Jennifer Lee</a>
      </li>
      <li>
        <label>Writers</label>
        <a href="/people/chris-buck">Chris Buck</a> <span>(story)</span>
        <span className="writers-more">
          , <a href="/people/allison-schroeder">Allison Schroeder</a>,{' '}
          <a href="/people/kristen-anderson-lopez">Kristen Anderson-Lopez</a> <span>(story)</span>,{' '}
          <a href="/people/jennifer-lee-6d9f3d57-0441-4031-a147-24f29f40a471">Jennifer Lee</a> <span>(characters)</span>
          , <a href="/people/robert-lopez-87923b57-f1ad-492a-b496-62aaf8fc24af">Robert Lopez</a> <span>(story)</span>,{' '}
          <a href="/people/marc-smith-d8a61604-d751-419b-aa09-2b3346750a13">Marc Smith</a> <span>(story)</span>
        </span>
      </li> */}
        <li>
          <label>Country</label>United States
        </li>
        <li>
          <label>Language</label>English
        </li>
        <li>
          <label>Genres </label>
          <span className="text-capitalize">{details.genres && details.genres.join(', ')}</span>
        </li>
      </ul>
    </InfoStyled>
  );
};

export default Info;

const InfoStyled = styled.section`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  label {
    margin-right: 0.5rem;
    margin-bottom: 0;
    color: ${(props) => props.theme.gray600};
    text-transform: uppercase;
  }
`;
