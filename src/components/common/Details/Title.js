import classNames from 'classnames';
import React from 'react';

const Title = ({ details = {}, className }) => {
  return (
    <h1 className={classNames('ml-2 mb-0 font-weight-bold text-white', className)}>
      {details.title} <small>{details.year}</small>
    </h1>
  );
};

export default Title;
