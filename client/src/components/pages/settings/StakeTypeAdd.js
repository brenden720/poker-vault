import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Back from '../../Back';

const StakeTypeAdd = (props) => {
  return (
    <div className='container'>
      <div className='info-header'>
        <h1 className='text-dark text-center'>Settings</h1>
        <Back route='/sessions/settings/stake-type' />
        <h3 className='text-dark text-center mb-3'>Stakes</h3>
      </div>
      <Form>
        <Form.Group controlId='formBasicStakeType'>
          <Form.Label>Stake Type</Form.Label>
          <Form.Control type='text' placeholder='Stake Type' />
        </Form.Group>
        <Link
          to='/sessions/settings/stake-type'
          className='btn btn-outline-dark btn-lg btn-block'
        >
          Add Stake
        </Link>
      </Form>
    </div>
  );
};

export default StakeTypeAdd;
