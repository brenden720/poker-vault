import React from 'react';
import Datetime from 'react-datetime';
import { Field } from 'redux-form';

class SessionTime extends React.Component {
  renderComponent = ({ input, label }) => {
    const name = label.toLowerCase().replace(/ /g, '_');
    return (
      <>
        {label && <label htmlFor={name}>{label}</label>}
        <Datetime
          value={input.value}
          onChange={(param) => {
            input.onChange(param.format('MM/DD/YYYY hh:mm A'));
          }}
          onBlur={this.focusOut}
          locale="en-US"
          dateFormat
          closeOnSelect
        />
      </>
    );
  };

  render() {
    const { label } = this.props;
    const name = label.toLowerCase().replace(/ /g, '_');
    return <Field name={name} component={this.renderComponent} label={label} />;
  }
}

export default SessionTime;
