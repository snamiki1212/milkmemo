import React from 'react';
import './App.css';
import List from './containers/List';
import AddButton from './containers/AddButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <input type='form' />
      <input type='number' />
      <AddButton />
      <p>MILK MEMO</p>
      <List />
    </div>
  );
}

export default App;
