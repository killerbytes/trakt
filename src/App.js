import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Authorize from 'components/Authorize';
import Collection from 'components/Collection';
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Authorize} />
        <Route path="/collection" component={Collection} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
