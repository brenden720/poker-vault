import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SessionFrontPage.css';
import {
  createUser,
  fetchSessions,
  setDashboard,
  fetchSetting,
} from '../../actions';

class SessionFrontPage extends React.Component {
  componentDidMount() {
    const { createUser, setDashboard } = this.props;

    createUser();
    setDashboard();
  }

  onClick = () => {
    const { fetchSetting } = this.props;

    fetchSetting('location_types');
    fetchSetting('limit_types');
    fetchSetting('stakes');
    fetchSetting('locations');
    fetchSetting('tournament_types');
    fetchSetting('games');
  };

  render() {
    return (
      <div className="container">
        <div className="info-header">
          <h1 className="text-dark text-center">Session History</h1>
          <div className="d-flex justify-content-around row-hl flex-md-row flex-column">
            <div className="p-4 item-hl">
              <Link
                to="/sessions/cash/all"
                className="btn btn-dark btn-lg btnFrontPage"
                onClick={this.onClick}
              >
                Cash Game History
              </Link>
            </div>
            <div className="p-4 item-hl">
              <Link
                to="/sessions/tourny/all"
                className="btn btn-dark btn-lg btnFrontPage"
              >
                Tournament History
              </Link>
            </div>
            <div className="p-4 item-hl">
              <Link
                to="/sessions/:id"
                className="btn btn-dark btn-lg my-auto btnFrontPage"
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

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions,
  };
};

export default connect(mapStateToProps, {
  createUser,
  fetchSessions,
  setDashboard,
  fetchSetting,
})(SessionFrontPage);
