import React from 'react';
import { reducer } from '../reducer/index.js';
import Grid from './Grid.js';
import { getInitialState } from '../utilities/index.js';

const Game = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    getInitialState()
  )
  const { grid, status, turn } = state

  const handleClick = (x, y) => {
    dispatch({ type: 'CLICK', payload: { x, y } })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>Next turn: {turn}</h3>
        <h4 style={{ color: 'green' }}>
          {status === 'success'
            ? `${turn} won!`
            : null}
        </h4>
        <button onClick={reset} type="button" style={{
          display: 'block',
          color: '#FFF',
          backgroundColor: '#000',
          padding: '0.3rem 1rem',
          borderRadius: '0.3rem',
          fontSize: '1rem'
        }}>
          reset
        </button>
      </div>
      <Grid
        grid={grid}
        handleClick={handleClick}
      />
    </div>
  )
}

export default Game;