import React from 'react';
import AddContainer from '../AddContainer';

const SessionHistoryCash = () => {
  return (
    <AddContainer
      mainHeader='Session History'
      subHeader='Cash Game History'
      route1='/sessions/cash/new'
      backRoute='/sessions'
    />
  );
};

export default SessionHistoryCash;
