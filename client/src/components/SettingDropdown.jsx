import React from 'react';
import { Field } from 'redux-form';
import history from '../history';

class SettingDropdown extends React.Component {
  onClick = (setting) => {
    history.push(`/sessions/settings/${setting}`);
    return false;
  };

  renderDropDown = (setting) => {
    return setting.map((value, id) => {
      return (
        <option className="btn btn-block" value={value} key={`setting-${id}`}>
          {value}
        </option>
      );
    });
  };

  render() {
    const {
      name,
      settings: { values },
    } = this.props;

    return (
      <Field name={name} component="select">
        <option />
        {this.renderDropDown(values)}
        <option disabled>───────────────────</option>
        <option disabled>Add New</option>
      </Field>
    );
  }
}

export default SettingDropdown;
