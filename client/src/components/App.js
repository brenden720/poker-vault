import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SessionHistoryFrontPage from './pages/SessionFrontPage';
import SessionHistory from './pages/SessionHistory';
import SessionHistoryForm from './pages/SessionHistoryForm';
import SessionHistoryData from './pages/SessionHistoryData';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={SessionHistoryFrontPage} />
            <Route path='/sessions' exact component={SessionHistory} />
            <Route path='/sessions/new' exact component={SessionHistoryForm} />
            <Route path='/sessions/:id' exact component={SessionHistoryData} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
