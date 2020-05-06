import React from 'react';
import AddContainer from '../../AddContainer';

const StakeType = (props) => {
  return (
    <AddContainer
      mainHeader='Settings'
      subHeader='Stake Type'
      route1='/sessions/settings/stake-type/new'
      backRoute='/sessions/settings'
    />
  );
};

export default StakeType;
