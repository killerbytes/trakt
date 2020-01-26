import React from 'react';
import styled from 'styled-components';

const Overview = ({ details }) => {
  return (
    <OverviewStyled>
      <p>{details.overview}</p>
      <div className="controls">
        <button>Check In</button>
        <button>Add to History</button>
        <button>Add to Collection</button>
        <button>Add to Watchlist</button>
      </div>
    </OverviewStyled>
  );
};

export default Overview;

const OverviewStyled = styled.section``;
