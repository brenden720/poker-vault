import React from 'react';
import AddContainer from '../../AddContainer';

const TournamentType = (props) => {
  return (
    <AddContainer
      mainHeader='Settings'
      subHeader='Tournament Type'
      route1='/sessions/settings/tournament-type/new'
      backRoute='/sessions/settings'
    />
  );
};

export default TournamentType;
