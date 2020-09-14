import React from 'react';
import './App.css';
import Game from './components/Game.js';

const App = () => {
  return (
    <div className='App'>
      <header>
        <h1>Tic Tac Toe in React</h1>
      </header>
      <Game />
    </div>
  )
}

export default App;
