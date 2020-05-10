import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Back from '../../Back';

const GameTypeAdd = props => {
  return (
    <div className='container'>
      <div className='info-header'>
        <h1 className='text-dark text-center'>Settings</h1>
        <Back route='/sessions/settings/game' />
        <h3 className='text-dark text-center mb-3'>Games</h3>
      </div>
      <Form>
        <Form.Group controlId='formBasicGameType'>
          <Form.Label>Game Type</Form.Label>
          <Form.Control type='text' placeholder='Game Type' />
        </Form.Group>
        <Link
          to='/sessions/settings/game'
          className='btn btn-outline-dark btn-lg btn-block'
        >
          Add Game
        </Link>
      </Form>
    </div>
  );
};

export default GameTypeAdd;
