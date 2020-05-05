import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Back from '../../Back';

const LocationTypeAdd = (props) => {
  return (
    <div className='container'>
      <div className='info-header'>
        <h1 className='text-dark text-center'>Settings</h1>
        <Back route='/sessions/settings/location_type' />
        <h3 className='text-dark text-center mb-3'>Locations</h3>
      </div>
      <Form>
        <Form.Group controlId='formBasicLocationType'>
          <Form.Label>Location Type</Form.Label>
          <Form.Control type='text' placeholder='Location Type' />
        </Form.Group>
        <Link
          to='/sessions/settings/location_type'
          className='btn btn-outline-dark btn-lg btn-block'
        >
          Add Location
        </Link>
      </Form>
    </div>
  );
};

export default LocationTypeAdd;
