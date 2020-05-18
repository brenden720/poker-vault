import React from 'react';
import { connect } from 'react-redux';
import { deleteSession } from '../actions';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      isHovered: false,
    };
  }

  onClick = () => {
    const { id, deleteSession } = this.props;
    deleteSession(id);
  };

  onMouseEnter = () => this.setState({ isHovered: true });

  onMouseLeave = () => this.setState({ isHovered: false });

  render() {
    const { id } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className="d-flex"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="w-100 btn btn-outline-dark btn-lg" ref={this.inputRef}>
          {`Session ${id}`}
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

export default connect(null, { deleteSession })(Session);
