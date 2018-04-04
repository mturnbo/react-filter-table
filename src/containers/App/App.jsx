import React from 'react';
import './App.scss';
import data from '../../../data/persons.json';
import DataTable from '../../components/DataTable';

class App extends React.Component {

  getColumns(d) {
    return Object.keys(d[0]);
  }

  render() {
    const columns = this.getColumns(data);
    return (
      <div className="app-container">
        <h2>React Filter Table</h2>
        <hr />
        <DataTable columns={columns} data={data} />
      </div>
    );
  }
}

export default App;
