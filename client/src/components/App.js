import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SessionHistory from './pages/SessionHistory';
import Header from './Header';
import history from '../history';
import Back from './Back';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={SessionHistory} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
