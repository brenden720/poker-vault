import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './SessionFrontPage.css';
import { createUser, fetchSessions } from '../../actions';

class SessionFrontPage extends React.Component {
  componentDidMount() {
    this.props.createUser();
    this.props.fetchSessions();
  }

  render() {
    return (
      <div className='container'>
        <div className='info-header'>
          <h1 className='text-dark text-center'>Session History</h1>
          <div className='d-flex justify-content-around row-hl flex-md-row flex-column'>
            <div className='p-4 item-hl'>
              <Link
                to='/sessions/cash/all'
                className='btn btn-dark btn-lg btnFrontPage'
              >
                Cash Game History
              </Link>
            </div>
            <div className='p-4 item-hl'>
              <Link
                to='/sessions/tourny/all'
                className='btn btn-dark btn-lg btnFrontPage'
              >
                Tournament History
              </Link>
            </div>
            <div className='p-4 item-hl'>
              <Link
                to='/sessions/:id'
                className={`btn btn-dark btn-lg my-auto btnFrontPage`}
              >
                Results
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions,
  };
};

// export default SessionFrontPage;
export default connect(mapStateToProps, { createUser, fetchSessions })(
  SessionFrontPage,
);
