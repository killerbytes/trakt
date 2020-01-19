import Loading from '../Loading';
import React from 'react';

const Aside = ({ poster }) => {
  return <aside>{poster.isLoading ? <Loading /> : <img className="poster" src={poster.path} alt="" />}</aside>;
};

export default Aside;
