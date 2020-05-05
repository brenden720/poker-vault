import 'regenerator-runtime/runtime.js';

import React from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from '../../actions/index';
import AddContainer from '../AddContainer';

class SessionHistory extends React.Component {
  componentDidMount() {
    this.props.fetchSessions();
  }

  render() {
    return (
      <AddContainer
        mainHeader='Session History'
        subHeader='Cash Game History'
        route1='/sessions/new'
        backRoute='/sessions'
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: 'placeholder',
  };
};

export default connect(mapStateToProps, { fetchSessions })(SessionHistory);
