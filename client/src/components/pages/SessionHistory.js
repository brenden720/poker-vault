import 'regenerator-runtime/runtime.js';

import React from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from '../../actions/index';
import Back from '../Back';

class SessionHistory extends React.Component {
  componentDidMount() {
    this.props.fetchSessions();
  }

  render() {
    return (
      <div className='container'>
        <div className='info-header'>
          <h1 className='text-dark text-center'>Session History</h1>
          <Back />
          <h3 className='text-dark text-center'>Cash Game History</h3>
          <div></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: 'placeholder',
  };
};

export default connect(mapStateToProps, { fetchSessions })(SessionHistory);
