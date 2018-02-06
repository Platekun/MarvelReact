import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from '../Header';
import { Footer } from '../Footer';
import Characters from '../characters';
import CharacterDetail from '../character-detail/CharacterDetail';
import { NotFound } from '../NotFound';

const history = createBrowserHistory();

const App = () => (
  <div>
    <Router history={history}>
      <div>
        <Header history={history} />
        <Switch>
          <Route path="/" exact component={Characters} />
          <Route path="/detail/:heroId" component={CharacterDetail} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </div>
);

export default App;

