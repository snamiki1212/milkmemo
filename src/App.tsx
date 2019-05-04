import React from 'react';
import './App.css';
import List from './containers/List';
import AddButton from './containers/AddButton';
import InputName from './containers/InputName';

const App: React.FC = () => {
  return (
    <div className="App">
      <InputName />
      <input type='number' />
      <AddButton />
      <p>MILK MEMO</p>
      <List />
    </div>
  );
}

export default App;
