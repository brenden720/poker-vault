import 'regenerator-runtime/runtime.js';

import React from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from '../../actions/index';
import Back from '../Back';
import { Link } from 'react-router-dom';

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
          <h3 className='text-dark text-center mb-3'>Cash Game History</h3>
          <div className='row w-50 mx-auto'>
            <div className='col'>
              <Link
                to='/sessions/new'
                className='btn btn-outline-dark btn-lg btn-block'
              >
                Add New Session
              </Link>
              <Link
                to='/sessions/:id'
                className='btn btn-outline-dark btn-lg btn-block'
              >
                Placeholder
              </Link>
            </div>
          </div>
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
