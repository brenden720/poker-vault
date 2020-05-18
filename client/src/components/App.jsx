import 'bootstrap/dist/css/bootstrap.css';
import 'regenerator-runtime';

import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Home from './pages/Home';
import SessionHistoryFrontPage from './pages/SessionFrontPage';
import SessionHistoryCash from './pages/SessionHistoryCash';
import SessionHistoryFormCash from './pages/SessionHistoryFormCash';
import SessionHistoryTourny from './pages/SessionHistoryTourny';
import SessionHistoryFormTourny from './pages/SessionHistoryFormTourny';
import SessionHistoryData from './pages/SessionHistoryData';
import SessionSettings from './pages/SessionSettings';
import AllSettings from './pages/settings/AllSettings';
import AllSettingsAdd from './pages/settings/AllSettingsAdd';
import Header from './Header';

const App = (props) => {
  const { settingDetails } = props;
  let activeSetting = '';

  for (const key in settingDetails) {
    if (settingDetails[key].isActive) {
      activeSetting = key.replace(/_/g, '-');
    }
  }

  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sessions" exact component={SessionHistoryFrontPage} />
            <Route
              path="/sessions/cash/all"
              exact
              component={SessionHistoryCash}
            />
            <Route
              path="/sessions/cash/new"
              exact
              component={SessionHistoryFormCash}
            />
            <Route
              path="/sessions/tourny/all"
              exact
              component={SessionHistoryTourny}
            />
            <Route
              path="/sessions/tourny/new"
              exact
              component={SessionHistoryFormTourny}
            />
            <Route
              path="/sessions/settings"
              exact
              component={SessionSettings}
            />
            <Route
              path={`/sessions/settings/${activeSetting}`}
              exact
              component={AllSettings}
            />
            <Route
              path={`/sessions/settings/${activeSetting}/new`}
              exact
              component={AllSettingsAdd}
            />
            <Route path="/sessions/:id" exact component={SessionHistoryData} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    settingDetails: state.settings,
  };
};

export default connect(mapStateToProps)(App);
