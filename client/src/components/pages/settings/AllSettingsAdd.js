import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Back from '../../Back';
import { createSetting } from '../../../actions';

class AllSettingsAdd extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.current.focus();
    }
  }

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

  renderError({ error, touched }) {
    if (touched && error) {
      console.log('error appears?');
      return <div className='header text-danger'>{error}</div>;
    }
  }

  renderInput = ({ input, meta, type, placeholder }) => {
    const className = `field ${
      meta.error && meta.touched ? 'error border border-danger' : ''
    }`;

    return (
      <>
        <div className={className}>
          <Form.Control
            type={type}
            placeholder={placeholder}
            value={input.value}
            onChange={input.onChange}
            ref={this.inputRef}
          />
        </div>
        {this.renderError(meta)}
      </>
    );
  };

  render() {
    const activeSetting = this.getActiveSetting();
    const subHeader = this.getSubHeader(activeSetting);
    const activeSettingParsed = activeSetting.replace(/-/g, '_');

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
              name={activeSettingParsed}
              type='text'
              component={this.renderInput}
              placeholder={subHeader}
            />
          </Form.Group>
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

const validate = formValues => {
  console.log('form values in validate: ', formValues);
  const errors = {};

  if (!formValues.location_type) {
    errors.location_type = 'You must enter a location type';
  }

  if (!formValues.limit_type) {
    errors.limit_type = 'You must enter a limit type';
  }

  if (!formValues.stake) {
    errors.stake = 'You must enter a stake level';
  }

  if (!formValues.location) {
    errors.location = 'You must enter a location';
  }

  if (!formValues.tournament_type) {
    errors.tournament_type = 'You must enter a tournament type';
  }

  if (!formValues.game) {
    errors.game = 'You must enter a game type';
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    settingNames: Object.keys(state.settings),
    settingDetails: state.settings,
  };
};

const formWrapped = reduxForm({
  form: 'settingsAddForm',
  validate,
})(AllSettingsAdd);

export default connect(mapStateToProps, { createSetting })(formWrapped);
