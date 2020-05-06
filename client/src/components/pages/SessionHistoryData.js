import React from 'react';
import Back from '../Back';

class SessionHistoryData extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='info-header'>
          <h1 className='text-dark text-center'>Results</h1>
          <Back route='/sessions' />
        </div>
      </div>
    );
  }
}

export default SessionHistoryData;
