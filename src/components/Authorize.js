import { inject } from 'mobx-react';
import React from 'react';

const Authorize = ({ authStore, location, history }) => {
  React.useEffect(() => {
    const token = location.search.split('?code=')[1];
    if (token) {
      authStore
        .getToken({
          code: token,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          redirect_uri: process.env.REACT_APP_REDIRECT_URL,
          grant_type: 'authorization_code',
        })
        .then((res) => {
          localStorage.setItem(`${process.env.REACT_APP_APP_NAME}`, JSON.stringify(res));
          history.push('/movies');
        });
    }
  }, [authStore, location.search, history]);
  return (
    <a href="https://api.trakt.tv/oauth/authorize?response_type=code&client_id=1f4b04c7f924405ea8fc1281ebe9644fd32aed9e34b8ec8a25510b2d7956af08&redirect_uri=http%3A%2F%2Flocalhost:3000/login&state">
      Login
    </a>
  );
};

export default inject('authStore')(Authorize);
