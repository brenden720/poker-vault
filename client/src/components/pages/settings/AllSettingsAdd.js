import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Back from '../../Back';
import { createSetting } from '../../../actions';

class AllSettingsAdd extends React.Component {
  onSubmit = formProps => {
    this.props.createSetting(formProps);
  };

  getActiveSetting = () => {
    const { settingDetails } = this.props;
    let activeSetting = '';
    for (let keys in settingDetails) {
      if (settingDetails[keys].isActive) {
        activeSetting = keys.replace(/_/g, '-');
      }
    }

    return activeSetting;
  };

  getSubHeader = title => {
    const parsedTitle = title
      .replace(/-/g, ' ')
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    return parsedTitle;
  };

  renderInput = ({ input, meta, type, placeholder, min, max }) => {
    return (
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={input.value}
        onChange={input.onChange}
      />
    );
  };

  render() {
    const activeSetting = this.getActiveSetting();
    const subHeader = this.getSubHeader(activeSetting);

    return (
      <div className='container'>
        <div className='info-header'>
          <h1 className='text-dark text-center'>Settings</h1>
          <Back route={`/sessions/settings/${activeSetting}`} />
          <h3 className='text-dark text-center mb-3'>{subHeader}</h3>
        </div>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Form.Group controlId={`formBasic${activeSetting}`}>
            <Form.Label>{subHeader}</Form.Label>
            <Field
              name={subHeader}
              type='text'
              component={this.renderInput}
              placeholder={subHeader}
            />
          </Form.Group>
          {/* <Link
            to={`/sessions/settings/${activeSetting}`}
            className='btn btn-outline-dark btn-lg btn-block'
          >
            Add {subHeader}
          </Link> */}
          <button
            type='submit'
            className='btn btn-outline-dark btn-lg btn-block'
          >
            Add {subHeader}
          </button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    settingNames: Object.keys(state.settings),
    settingDetails: state.settings,
  };
};

const formWrapped = reduxForm({
  form: 'settingsAddForm',
})(AllSettingsAdd);

export default connect(mapStateToProps, { createSetting })(formWrapped);
