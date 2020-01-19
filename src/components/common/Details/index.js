import React from 'react';
import styled from 'styled-components';

const Details = ({ children }) => {
  return <DetailsStyled>{children}</DetailsStyled>;
};

export default Details;

const DetailsStyled = styled.div`
  background-color: #fff;
  color: ${(props) => props.theme.textColorGray};
  .main {
    display: flex;
    padding-top: 18rem;
    position: relative;
    .content {
      padding-top: 14rem;
    }
  }
  aside {
    position: sticky;
    top: 70px;
    align-self: flex-start;
    margin-right: 1.5rem;
    width: 180px;
    min-width: 180px;
    img {
      width: 100%;
      border: 3px solid #fff;
      box-shadow: 0 0 20px 0 #666;
    }
  }
  .overview {
    display: flex;
    .controls {
      margin-left: auto;
      padding: 1rem;
    }
  }
`;
