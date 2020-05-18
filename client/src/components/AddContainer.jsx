import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Back from './Back';
import { fetchSessions, fetchSetting } from '../actions';
import Setting from './Setting';
import Session from './Session';

class AddContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const {
      fetchSessions,
      fetchSetting,
      container: { dashboard, settings },
    } = this.props;

    if (dashboard) {
      fetchSessions();
    }
    if (settings) {
      fetchSetting(this.getActiveSetting());
    }
  }

  getActiveSetting = () => {
    const { settingDetails } = this.props;
    let activeSetting = '';

    for (const keys in settingDetails) {
      if (settingDetails[keys].isActive) {
        activeSetting = keys.concat('s');
      }
    }

    return activeSetting;
  };

  renderSessions = () => {
    const { settings, sessions } = this.props;
    if (!settings) {
      return null;
    }

    return sessions.map((session) => {
      return (
        <div key={session.id}>
          <Session id={session.id} />
        </div>
      );
    });
  };

  renderSettings = () => {
    /* renaming settings to 'exists' to use the 'settings' variable in the map /fn with the values data */
    const {
      settings: exists,
      settings: { values: settings },
    } = this.props;
    if (!exists) {
      return null;
    }

    return settings.map((setting, id) => {
      return (
        <div key={`setting-${id}`}>
          <Setting setting={setting} />
        </div>
      );
    });
  };

  renderComponent = () => {
    const {
      container: { dashboard, settings },
    } = this.props;

    if (dashboard) {
      return this.renderSessions();
    }

    if (settings) {
      return this.renderSettings();
    }

    return null;
  };

  render() {
    const { mainHeader, subHeader, route1, backRoute } = this.props;

    return (
      <div className="container">
        <div className="info-header">
          <h1 className="text-dark text-center">{mainHeader}</h1>
          <Back route={backRoute} />
          <h3 className="text-dark text-center mb-3">{subHeader}</h3>
          <div className="row w-50 mx-auto">
            <div className="col">
              <Link
                to={route1}
                className="btn btn-outline-dark btn-lg btn-block"
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

const mapStateToProps = (state) => {
  let setting = '';

  for (const key in state.settings) {
    if (state.settings[key].isActive) {
      setting = key;
      break;
    }
  }
  return {
    sessions: Object.values(state.sessions),
    settings: state.settings[setting],
    container: state.container,
    settingDetails: state.settings,
  };
};

export default connect(mapStateToProps, { fetchSessions, fetchSetting })(
  AddContainer
);
