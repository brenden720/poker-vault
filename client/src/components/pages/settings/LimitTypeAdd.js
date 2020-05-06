import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Back from '../../Back';

const LimitTypeAdd = (props) => {
  return (
    <div className='container'>
      <div className='info-header'>
        <h1 className='text-dark text-center'>Settings</h1>
        <Back route='/sessions/settings/limit-type' />
        <h3 className='text-dark text-center mb-3'>Limits</h3>
      </div>
      <Form>
        <Form.Group controlId='formBasicLimitType'>
          <Form.Label>Limit Type</Form.Label>
          <Form.Control type='text' placeholder='Limit Type' />
        </Form.Group>
        <Link
          to='/sessions/settings/limit-type'
          className='btn btn-outline-dark btn-lg btn-block'
        >
          Add Limit
        </Link>
      </Form>
    </div>
  );
};

export default LimitTypeAdd;
