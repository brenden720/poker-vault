import React from 'react';
import { Link } from 'react-router-dom';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  onMouseEnter = () => this.setState({ isHovered: true });

  onMouseLeave = () => this.setState({ isHovered: false });

  render() {
    const { setting } = this.props;
    console.log(this.state.isHovered);
    return (
      <div
        className='d-flex'
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className='w-100 btn btn-outline-dark btn-lg'>{setting}</div>
        {this.state.isHovered && (
          <div className='flex-shrink-1 btn btn-outline-danger border border-dark'>
            <i className='fas fa-trash-alt fa-2x'></i>
          </div>
        )}
      </div>
    );
  }
}

export default Setting;
