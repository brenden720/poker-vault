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
import LimitType from './pages/settings/LimitType';
import LimitTypeAdd from './pages/settings/LimitTypeAdd';
import StakeType from './pages/settings/StakeType';
import StakeTypeAdd from './pages/settings/StakeTypeAdd';
import Location from './pages/settings/Location';
import LocationAdd from './pages/settings/LocationAdd';
import TournamentType from './pages/settings/TournamentType';
import TournamentTypeAdd from './pages/settings/TournamentTypeAdd';
import GameType from './pages/settings/GameType';
import GameTypeAdd from './pages/settings/GameTypeAdd';
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
              path='/sessions/settings/location-type'
              exact
              component={LocationType}
            />
            <Route
              path='/sessions/settings/location-type/new'
              exact
              component={LocationTypeAdd}
            />
            <Route
              path='/sessions/settings/limit-type'
              exact
              component={LimitType}
            />
            <Route
              path='/sessions/settings/limit-type/new'
              exact
              component={LimitTypeAdd}
            />
            <Route
              path='/sessions/settings/stake-type'
              exact
              component={StakeType}
            />
            <Route
              path='/sessions/settings/stake-type/new'
              exact
              component={StakeTypeAdd}
            />
            <Route
              path='/sessions/settings/location'
              exact
              component={Location}
            />
            <Route
              path='/sessions/settings/location/new'
              exact
              component={LocationAdd}
            />
            <Route
              path='/sessions/settings/tournament-type'
              exact
              component={TournamentType}
            />
            <Route
              path='/sessions/settings/tournament-type/new'
              exact
              component={TournamentTypeAdd}
            />
            <Route
              path='/sessions/settings/game-type'
              exact
              component={GameType}
            />
            <Route
              path='/sessions/settings/game-type/new'
              exact
              component={GameTypeAdd}
            />
            <Route path='/sessions/:id' exact component={SessionHistoryData} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
