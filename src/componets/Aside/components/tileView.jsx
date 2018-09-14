import React from 'react';
import { Context } from '../../../store/ContextStore.jsx';

export const TileView = () => {
  return (
    <Context.Consumer>
      {({ onClickChangeView }) => {
        return (
          <button onClick={onClickChangeView} className="tile active">
            Плитка
          </button>
        );
      }}
    </Context.Consumer>
  );
};
