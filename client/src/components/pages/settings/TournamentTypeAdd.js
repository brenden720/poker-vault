import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Back from '../../Back';

const TournamentTypeAdd = (props) => {
  return (
    <div className='container'>
      <div className='info-header'>
        <h1 className='text-dark text-center'>Settings</h1>
        <Back route='/sessions/settings/tournament-type' />
        <h3 className='text-dark text-center mb-3'>Tournament Types</h3>
      </div>
      <Form>
        <Form.Group controlId='formBasicTournamentType'>
          <Form.Label>Tournament Type</Form.Label>
          <Form.Control type='text' placeholder='Tournament Type' />
        </Form.Group>
        <Link
          to='/sessions/settings/tournament-type'
          className='btn btn-outline-dark btn-lg btn-block'
        >
          Add Tournament
        </Link>
      </Form>
    </div>
  );
};

export default TournamentTypeAdd;
