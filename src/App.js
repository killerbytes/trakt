import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Authorize from 'components/Authorize';
import Collection from 'components/Collection';
import React from 'react';
import Header from 'components/common/Header';
import Movies from 'components/Movies'
import MovieDetails from 'components/Movies/Details'
import PeopleSummary from 'components/People/Summary'

const MainLayout = ({ component: Component, ...rest }) => <Route
  {...rest}
  render={(props) => {
    return <React.Fragment>

      <Header />
      <Component {...props} />
    </React.Fragment>
  }}
/>

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Authorize} />
        <MainLayout path="/collection" component={Collection} />
        <MainLayout path="/shows/:type" component={Collection} />
        <MainLayout path="/movies/details/:slug" component={MovieDetails} />
        <MainLayout path="/movies/:type" component={Movies} />
        <MainLayout path="/people/:slug" component={PeopleSummary} />
        <Redirect from="/movies" to="/movies/trending" />

        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
