import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SessionHistory from './pages/SessionHistory';
import SessionHistoryForm from './pages/SessionHistoryForm';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={SessionHistory} />
            <Route path='/sessions/new' exact component={SessionHistoryForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
