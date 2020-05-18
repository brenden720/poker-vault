import React from 'react';
import { connect } from 'react-redux';
import AddContainer from '../../AddContainer';

class AllSettings extends React.Component {
  getActiveSetting = () => {
    const { settingDetails } = this.props;
    let activeSetting = '';

    for (const key in settingDetails) {
      if (settingDetails[key].isActive) {
        activeSetting = key.replace(/_/g, '-');
      }
    }

    return activeSetting;
  };

  getSubHeader = (title) => {
    const parsedTitle = title
      .replace(/-/g, ' ')
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    return parsedTitle;
  };

  render() {
    const activeSetting = this.getActiveSetting();
    const subHeader = this.getSubHeader(activeSetting);

    return (
      <AddContainer
        mainHeader="Settings"
        subHeader={subHeader}
        route1={`/sessions/settings/${activeSetting}/new`}
        backRoute="/sessions/settings"
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settingNames: Object.keys(state.settings),
    settingDetails: state.settings,
  };
};

export default connect(mapStateToProps)(AllSettings);
