import React from 'react';
import './App.scss';
import FilterContainer from './containers/FilterContainer';

const App = () => {
  return (
    <div className="app-container">
      <h2>React Filter Table</h2>
      <hr />
      <FilterContainer />
    </div>
  );
};

export default App;
