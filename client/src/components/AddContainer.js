import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Back from './Back';
import { fetchSessions } from '../actions';

class AddContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.sessions.length === this.props.sessions.length) {
      this.props.fetchSessions();
    }
  }

  renderSessions() {
    return this.props.sessions.map(session => {
      return (
        <Link
          to='#'
          className='btn btn-outline-dark btn-lg btn-block'
          key={session.id}
        >
          Session {session.id}
        </Link>
      );
    });
  }

  render() {
    const { mainHeader, subHeader, route1, backRoute } = this.props;

    return (
      <div className='container'>
        <div className='info-header'>
          <h1 className='text-dark text-center'>{mainHeader}</h1>
          <Back route={backRoute} />
          <h3 className='text-dark text-center mb-3'>{subHeader}</h3>
          <div className='row w-50 mx-auto'>
            <div className='col'>
              <Link
                to={route1}
                className='btn btn-outline-dark btn-lg btn-block'
              >
                Add
              </Link>
              {this.renderSessions()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default AddContainer;
const mapStateToProps = state => {
  return {
    sessions: Object.values(state.sessions),
  };
};

export default connect(mapStateToProps, { fetchSessions })(AddContainer);
