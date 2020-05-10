import React from 'react';
import AddContainer from '../../AddContainer';

const Stake = props => {
  return (
    <AddContainer
      mainHeader='Settings'
      subHeader='Stake'
      route1='/sessions/settings/stake/new'
      backRoute='/sessions/settings'
    />
  );
};

export default Stake;
