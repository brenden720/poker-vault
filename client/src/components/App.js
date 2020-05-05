import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SessionHistoryFrontPage from './pages/SessionFrontPage';
import SessionHistory from './pages/SessionHistory';
import SessionHistoryForm from './pages/SessionHistoryForm';
import SessionHistoryData from './pages/SessionHistoryData';
import SessionSettings from './pages/SessionSettings';
import LocationType from './pages/settings/LocationType';
import LocationTypeAdd from './pages/settings/LocationTypeAdd';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/sessions' exact component={SessionHistoryFrontPage} />
            <Route path='/sessions/all' exact component={SessionHistory} />
            <Route path='/sessions/new' exact component={SessionHistoryForm} />
            <Route
              path='/sessions/settings'
              exact
              component={SessionSettings}
            />
            <Route
              path='/sessions/settings/location_type'
              exact
              component={LocationType}
            />
            <Route
              path='/sessions/settings/location_type/new'
              exact
              component={LocationTypeAdd}
            />
            <Route path='/sessions/:id' exact component={SessionHistoryData} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
