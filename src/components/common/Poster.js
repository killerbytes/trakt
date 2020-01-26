import Loading from './Loading';
import React from 'react';

const Poster = ({ poster }) => {
  return poster.isLoading ? <Loading /> : <img className="poster" src={poster.path} alt="" />;
};

export default Poster;
