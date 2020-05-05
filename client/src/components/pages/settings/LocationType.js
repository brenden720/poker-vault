import React from 'react';
import AddContainer from '../../AddContainer';

const LocationType = (props) => {
  return (
    <AddContainer
      mainHeader='Settings'
      subHeader='Location Type'
      route1='/sessions/settings/location_type/new'
      backRoute='/sessions/settings'
    />
  );
};

export default LocationType;
