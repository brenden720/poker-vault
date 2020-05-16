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
    this.state = {
      isHovered: false,
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { dashboard, settings } = this.props.container;

    if (dashboard) {
      this.props.fetchSessions();
    }
    if (settings) {
      this.props.fetchSetting(this.getActiveSetting());
    }
  }

  getActiveSetting = () => {
    const { settingDetails } = this.props;
    let activeSetting = '';
    for (let keys in settingDetails) {
      if (settingDetails[keys].isActive) {
        activeSetting = keys.concat('s');
      }
    }

    return activeSetting;
  };

  // onMouseEnter = () => this.setState({ isHovered: true });

  // onMouseLeave = () => this.setState({ isHovered: false });

  renderSessions = () => {
    if (!this.props.settings) {
      return null;
    }
    console.log(this.props.sessions);
    return this.props.sessions.map(session => {
      return (
        <div key={session.id}>
          <Session id={session.id} />
        </div>
      );
    });
  };

  renderSettings = () => {
    if (!this.props.settings) {
      return null;
    }
    const settings = this.props.settings.values;
    return settings.map((setting, id) => {
      return (
        <div key={id}>
          <Setting setting={setting} />
        </div>
      );
    });
  };

  renderComponent = () => {
    const { dashboard, settings } = this.props.container;

    if (dashboard) {
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
    settingDetails: state.settings,
  };
};

export default connect(mapStateToProps, { fetchSessions, fetchSetting })(
  AddContainer,
);
