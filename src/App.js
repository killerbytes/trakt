import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Authorize from 'components/Authorize';
import Collection from 'components/Collection';
import Details from 'components/Details';
import Header from 'components/common/Header';
import Movies from 'components/Movies';
import PeopleDetails from 'components/People';
import React from 'react';
import Shows from 'components/Shows';

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
        <MainLayout path="/people/:slug" component={PeopleDetails} />
        <MainLayout path="/:type/details/:slug" component={Details} />
        <MainLayout path="/shows/:category" component={Shows} />
        <MainLayout path="/movies/:category" component={Movies} />
        <Redirect from="/shows" to="/shows/trending" />
        <Redirect from="/movies" to="/movies/trending" />

        <Redirect from="/" to="/movies" />
      </Switch>
    </Router>
  );
}

export default App;
