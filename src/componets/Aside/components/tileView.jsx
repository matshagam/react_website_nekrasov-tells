import React from 'react';
import { Context } from '../../../store/ContextStore.jsx';

export const TileView = () => {
  return (
    <Context.Consumer>
      {({ onClickChangeView }) => {
        return (
          <button onClick={onClickChangeView} className="aside-text tile">
            Плитка
          </button>
        );
      }}
    </Context.Consumer>
  );
};
