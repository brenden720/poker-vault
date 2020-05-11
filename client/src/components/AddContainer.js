import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Back from './Back';
import { fetchSessions } from '../actions';

class AddContainer extends React.Component {
  componentDidUpdate(prevProps) {
    const { dashboard, settings } = this.props.container;
    if (dashboard && prevProps.sessions.length === this.props.sessions.length) {
      this.props.fetchSessions();
    }
  }

  renderSessions = () => {
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
  };

  renderSettings = () => {
    if (!this.props.settings) {
      return null;
    }
    const settings = this.props.settings.values;

    return settings.map(setting => {
      return (
        <Link
          to='#'
          className='btn btn-outline-dark btn-lg btn-block'
          key={setting}
        >
          {setting}
        </Link>
      );
    });
  };

  renderComponent = () => {
    const { dashboard, settings } = this.props.container;

    if (dashboard) {
      console.log('dashboard stuff');
      return this.renderSessions();
    }
    if (settings) {
      return this.renderSettings();
    }
  };

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
              {this.renderComponent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let setting = '';
  for (let key in state.settings) {
    if (state.settings[key].isActive) {
      setting = key;
      break;
    }
  }
  return {
    sessions: Object.values(state.sessions),
    settings: state.settings[setting],
    container: state.container,
  };
};

export default connect(mapStateToProps, { fetchSessions })(AddContainer);
