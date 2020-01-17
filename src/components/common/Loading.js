import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingStyled>
      <i className="fas fa-spinner fa-spin fa-2x"></i>
    </LoadingStyled>
  );
};

export default Loading;

const LoadingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
