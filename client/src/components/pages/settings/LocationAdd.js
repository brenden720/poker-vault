import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Back from '../../Back';

const LocationAdd = (props) => {
  return (
    <div className='container'>
      <div className='info-header'>
        <h1 className='text-dark text-center'>Settings</h1>
        <Back route='/sessions/settings/location' />
        <h3 className='text-dark text-center mb-3'>Locations</h3>
      </div>
      <Form>
        <Form.Group controlId='formBasicLocation'>
          <Form.Label>Location</Form.Label>
          <Form.Control type='text' placeholder='Location' />
        </Form.Group>
        <Link
          to='/sessions/settings/location'
          className='btn btn-outline-dark btn-lg btn-block'
        >
          Add Location
        </Link>
      </Form>
    </div>
  );
};

export default LocationAdd;
