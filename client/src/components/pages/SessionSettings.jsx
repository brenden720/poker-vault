import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSettings, fetchSetting } from '../../actions';

class SessionSettings extends React.Component {
  componentDidMount() {
    const { setSettings } = this.props;
    setSettings();
  }

  onSettingClick = (settingName) => {
    const { fetchSetting } = this.props;
    settingName += 's';
    fetchSetting(settingName);
  };

  renderSettings() {
    const { settings } = this.props;

    return settings.map((setting, id) => {
      const parsedSettingPath = setting.replace(/_/g, '-');
      const parsedTitle = setting
        .replace(/_/g, ' ')
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
      return (
        <div className="p-4 col-6" key={id}>
          <Link
            to={`/sessions/settings/${parsedSettingPath}`}
            className="btn btn-primary btn-block"
            onClick={() => this.onSettingClick(setting)}
          >
            {parsedTitle}
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="info-header">
          <h1 className="text-dark text-center">Settings</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          {this.renderSettings()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { settings: Object.keys(state.settings) };
};

export default connect(mapStateToProps, { setSettings, fetchSetting })(
  SessionSettings
);
