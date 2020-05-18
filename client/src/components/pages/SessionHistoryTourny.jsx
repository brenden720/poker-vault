import React from 'react';
import AddContainer from '../AddContainer';

const SessionHistoryTourny = () => {
  return (
    <AddContainer
      mainHeader='Session History'
      subHeader='Tournament History'
      route1='/sessions/tourny/new'
      backRoute='/sessions'
    />
  );
};

export default SessionHistoryTourny;
