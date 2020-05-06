import React from 'react';
import { Link } from 'react-router-dom';

class SessionSettings extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='info-header'>
          <h1 className='text-dark text-center'>Settings</h1>
        </div>
        <div className='d-flex flex-wrap justify-content-around'>
          <div className='p-4 col-6'>
            <Link
              to='/sessions/settings/location-type'
              className='btn btn-primary btn-block'
            >
              Location Type
            </Link>
          </div>
          <div className='p-4 col-6'>
            <Link
              to='/sessions/settings/limit-type'
              className='btn btn-primary btn-block'
            >
              Limit Type
            </Link>
          </div>
          <div className='p-4 col-6'>
            <Link
              to='/sessions/settings/stake-type'
              className='btn btn-primary btn-block'
            >
              Stake
            </Link>
          </div>
          <div className='p-4 col-6'>
            <Link
              to='/sessions/settings/location'
              className='btn btn-primary btn-block'
            >
              Location
            </Link>
          </div>
          <div className='p-4 col-6'>
            <Link
              to='/sessions/settings/tournament-type'
              className='btn btn-primary btn-block'
            >
              Tournament Type
            </Link>
          </div>
          <div className='p-4 col-6'>
            <Link
              to='/sessions/settings/game-type'
              className='btn btn-primary btn-block'
            >
              Game
            </Link>
          </div>
          <div className='p-4 col-6'>
            <Link to='#' className='btn btn-primary btn-block disabled'>
              Default Cash Game
            </Link>
          </div>
          <div className='p-4 col-6'>
            <Link to='#' className='btn btn-primary btn-block disabled'>
              Default Tournament
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionSettings;
