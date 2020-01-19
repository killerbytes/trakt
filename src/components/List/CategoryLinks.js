import { NavLink, withRouter } from 'react-router-dom';
import React from 'react';

const CategoryLinks = ({ type }) => {
  return (
    <ul>
      <li>
        <NavLink to={`/${type}/trending`}>Trending</NavLink>
      </li>
      <li>
        <NavLink to={`/${type}/popular`}>Popular</NavLink>
      </li>
      <li>
        <NavLink to={`/${type}/watched`}>Watched</NavLink>
      </li>
      <li>
        <NavLink to={`/${type}/collected`}>Collected</NavLink>
      </li>
      <li>
        <NavLink to={`/${type}/anticipated`}>Anticipated</NavLink>
      </li>
      {type === 'movies' && (
        <li>
          <NavLink to={`/${type}/boxoffice`}>Box Office</NavLink>
        </li>
      )}
    </ul>
  );
};

export default withRouter(CategoryLinks);
