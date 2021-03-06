import React from 'react';
import { connect } from 'react-redux';
import { deleteSetting } from '../actions';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      isHovered: false,
    };
  }

  getActiveSetting = () => {
    const { settingDetails } = this.props;
    let activeSetting = '';
    for (const key in settingDetails) {
      if (settingDetails[key].isActive) {
        activeSetting = key.replace(/_/g, '-');
      }
    }
    activeSetting += 's';
    return activeSetting;
  };

  onClick = () => {
    const { deleteSetting } = this.props;
    const tableName = this.getActiveSetting().replace(/-/g, '_');
    deleteSetting(tableName, this.inputRef.current.firstChild.data);
  };

  onMouseEnter = () => this.setState({ isHovered: true });

  onMouseLeave = () => this.setState({ isHovered: false });

  render() {
    const { setting } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className="d-flex"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="w-100 btn btn-outline-dark btn-lg" ref={this.inputRef}>
          {setting}
        </div>
        {isHovered && (
          <div
            className="flex-shrink-1 btn btn-outline-danger border border-dark"
            onClick={this.onClick}
          >
            <i className="fas fa-trash-alt fa-2x"></i>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settingDetails: state.settings,
  };
};

export default connect(mapStateToProps, { deleteSetting })(Setting);
