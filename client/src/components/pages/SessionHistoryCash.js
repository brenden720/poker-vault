import 'regenerator-runtime/runtime.js';

import React from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from '../../actions/index';
import AddContainer from '../AddContainer';

class SessionHistoryCash extends React.Component {
  render() {
    return (
      <AddContainer
        mainHeader='Session History'
        subHeader='Cash Game History'
        route1='/sessions/cash/new'
        backRoute='/sessions'
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions,
  };
};

export default connect(mapStateToProps, { fetchSessions })(SessionHistoryCash);
// export default SessionHistoryCash;
