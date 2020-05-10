import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SessionSettings extends React.Component {
  renderSettings() {
    return this.props.settings.map((setting, id) => {
      const parsedSettingPath = setting.replace(/_/g, '-');
      const parsedTitle = setting
        .replace(/_/g, ' ')
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

      return (
        <div className='p-4 col-6' key={id}>
          <Link
            to={`/sessions/settings/${parsedSettingPath}`}
            className='btn btn-primary btn-block'
          >
            {parsedTitle}
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='info-header'>
          <h1 className='text-dark text-center'>Settings</h1>
        </div>
        <div className='d-flex flex-wrap justify-content-around'>
          {this.renderSettings()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { settings: Object.keys(state.settings) };
};

export default connect(mapStateToProps)(SessionSettings);
