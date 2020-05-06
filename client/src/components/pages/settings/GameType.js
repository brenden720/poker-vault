import React from 'react';
import AddContainer from '../../AddContainer';

const GameType = (props) => {
  return (
    <AddContainer
      mainHeader='Settings'
      subHeader='Game Type'
      route1='/sessions/settings/game-type/new'
      backRoute='/sessions/settings'
    />
  );
};

export default GameType;
