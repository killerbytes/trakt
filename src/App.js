import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Authorize from 'components/Authorize';
import Collection from 'components/Collection';
import Header from 'components/common/Header';
import MovieDetails from 'components/Movies/Details';
import Movies from 'components/Movies';
import PeopleSummary from 'components/People/Summary';
import React from 'react';

const MainLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <React.Fragment>
          <Header />
          <Component {...props} />
        </React.Fragment>
      );
    }}
  />
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Authorize} />
        <MainLayout path="/collection" component={Collection} />
        <MainLayout path="/movies/details/:slug" component={MovieDetails} />
        <MainLayout path="/:type/:category" component={Movies} />
        <MainLayout path="/people/:slug" component={PeopleSummary} />
        <Redirect from="/movies" to="/movies/trending" />

        <Redirect from="/" to="/movies" />
      </Switch>
    </Router>
  );
}

export default App;
