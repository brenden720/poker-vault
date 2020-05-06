import 'regenerator-runtime/runtime.js';

import React from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from '../../actions/index';
import AddContainer from '../AddContainer';

class SessionHistoryTourny extends React.Component {
  // componentDidMount() {
  //   this.props.fetchSessions();
  // }

  render() {
    return (
      <AddContainer
        mainHeader='Session History'
        subHeader='Tournament History'
        route1='/sessions/tourny/new'
        backRoute='/sessions'
      />
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     session: 'placeholder',
//   };
// };

// export default connect(mapStateToProps, { fetchSessions })(SessionHistoryTourny);
export default SessionHistoryTourny;
