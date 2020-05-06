import React from 'react';
import AddContainer from '../../AddContainer';

const Location = (props) => {
  return (
    <AddContainer
      mainHeader='Settings'
      subHeader='Location'
      route1='/sessions/settings/location/new'
      backRoute='/sessions/settings'
    />
  );
};

export default Location;
