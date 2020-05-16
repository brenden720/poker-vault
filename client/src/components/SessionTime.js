import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import { Field } from 'redux-form';

let date = new Date();

class SessionTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: '' };
  }

  focusOut = value => {
    if (!moment(value).isValid()) {
      this.setState({ selectedValue: '' });
    }
  };

  handleChange = date => {
    this.setState({ selectedValue: date });
  };

  renderComponent = ({ input, label }) => {
    console.log(input.value);
    return (
      <>
        {label && <label>{label}</label>}
        <Datetime
          value={input.value}
          onChange={param => {
            input.onChange(param.format('MM/DD/YYYY hh:mm A'));
          }}
          onBlur={this.focusOut}
          locale='en-US'
          dateFormat
          closeOnSelect
        />
      </>
    );
  };

  render() {
    const name = this.props.label.toLowerCase().replace(/ /g, '_');
    return (
      <Field
        name={name}
        component={this.renderComponent}
        label={this.props.label}
      />
    );
  }
}

export default SessionTime;
