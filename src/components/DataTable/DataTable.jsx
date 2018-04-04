import React from 'react';
import PropTypes from 'prop-types';
import './DataTable.scss';

const DataTable = ({columns, data}) => {
  const getColumnHeaderss = cols => <tr>{cols.map((col, index) => <th key={index}>{col}</th>)}</tr>;

  const getRows = data => {
    return data.map(row => <tr>{Object.keys(row).map(col => <td>{row[col]}</td>)}</tr>);
  };

  return (
      <div>
        <table>
          <thead>
          {getColumnHeaderss(columns)}
          </thead>
          <tbody>
          {getRows(data)}
          </tbody>
        </table>
      </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

export default DataTable;