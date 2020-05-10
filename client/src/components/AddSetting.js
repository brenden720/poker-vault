import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const AddSetting = props => {
  return (
    <>
      <h3 className='text-dark text-center mb-3'>Locations</h3>
      <Form>
        <Form.Group controlId='formBasicLocationType'>
          <Form.Label>Location Type</Form.Label>
          <Form.Control type='text' placeholder='Location Type' />
        </Form.Group>
        <Link
          to='/sessions/settings/location-type'
          className='btn btn-outline-dark btn-lg btn-block'
        >
          Add Location
        </Link>
      </Form>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

// export default connect(null)(AddSetting);

const formWrapped = reduxForm({
  form: 'settingAdd',
})(AddSetting);

export default connect(null)(formWrapped);
