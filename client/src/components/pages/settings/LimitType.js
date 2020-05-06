import React from 'react';
import AddContainer from '../../AddContainer';

const LimitType = (props) => {
  return (
    <AddContainer
      mainHeader='Settings'
      subHeader='Limit Type'
      route1='/sessions/settings/limit-type/new'
      backRoute='/sessions/settings'
    />
  );
};

export default LimitType;
