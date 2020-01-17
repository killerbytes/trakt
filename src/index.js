import './sass/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import stores from 'stores';

/* eslint import/no-webpack-loader-syntax: off */
const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./sass/vars.scss');

ReactDOM.render(
  <Provider {...stores}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
