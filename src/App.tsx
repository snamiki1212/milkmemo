import React from 'react';
import './App.css';
import List from './containers/List';

const App: React.FC = () => {
  return (
    <div className="App">
      <input type='form' />
      <input type='number' />
      <button>ADD</button>
      <p>MILK MEMO</p>
      <List />
    </div>
  );
}

export default App;
