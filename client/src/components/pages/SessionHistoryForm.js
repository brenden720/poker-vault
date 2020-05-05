import React from 'react';
import { Form } from 'react-bootstrap';
import Back from '../Back';
import { Link } from 'react-router-dom';

const SessionHistoryForm = (props) => {
  return (
    <div className='container'>
      <div className='info-header'>
        <h1 className='text-dark text-center'>Session History</h1>
        <Back route='/sessions/all' />
        <h3 className='text-dark text-center mb-3'>Cash Game Input</h3>
        <Form>
          <div className='form-row'>
            <div className='col-md'>
              <Form.Group controlId='formBasicGameType'>
                <Form.Label>Game</Form.Label>
                <Form.Control type='text' placeholder='Game type' />
              </Form.Group>
              <Form.Group controlId='formBasicStakeLevel'>
                <Form.Label>Stake</Form.Label>
                <Form.Control type='text' placeholder='Stake Level' />
              </Form.Group>
              <Form.Group controlId='formBasicLimitType'>
                <Form.Label>Limit Type</Form.Label>
                <Form.Control type='text' placeholder='Limit Type' />
              </Form.Group>
              <Form.Group controlId='formBasicLocation'>
                <Form.Label>Location</Form.Label>
                <Form.Control type='text' placeholder='Location' />
              </Form.Group>
              <Form.Group controlId='formBasicLocationType'>
                <Form.Label>Location Type</Form.Label>
                <Form.Control type='text' placeholder='Location Type' />
              </Form.Group>
            </div>
            <div className='col-md'>
              <Form.Group controlId='formBasicStartTime'>
                <Form.Label>Start Time</Form.Label>
                <Form.Control type='text' placeholder='Start Time' />
              </Form.Group>
              <Form.Group controlId='formBasicEndTime'>
                <Form.Label>End Time</Form.Label>
                <Form.Control type='text' placeholder='End Time' />
              </Form.Group>
              <Form.Group controlId='formBasicBuyIn'>
                <Form.Label>Buy-In</Form.Label>
                <Form.Control type='text' placeholder='Buy-In' />
              </Form.Group>
              <Form.Group controlId='formBasicCashedOut'>
                <Form.Label>Cashed Out</Form.Label>
                <Form.Control type='text' placeholder='Cashed Out' />
              </Form.Group>
              <Form.Group controlId='formBasicTips'>
                <Form.Label>Tips</Form.Label>
                <Form.Control type='text' placeholder='Tips' />
              </Form.Group>
            </div>
          </div>
          <Link
            to='/sessions/all'
            className='btn btn-outline-dark btn-lg btn-block'
          >
            Add Session
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default SessionHistoryForm;
