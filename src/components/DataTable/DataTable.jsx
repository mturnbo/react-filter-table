import React from 'react';
import PropTypes from 'prop-types';
import './DataTable.scss';

const DataTable = ({columns, data}) => {
  const getColumnHeaders = cols => <tr>{cols.map((col, index) => <th key={index}>{col}</th>)}</tr>;

  const getRows = data => {
    return data.map((row, index) => <tr key={index}>{Object.keys(row).map((col,index) => <td key={index}>{row[col]}</td>)}</tr>);
  };

  return (
      <div>
        <table className="data-table">
          <thead>
          {getColumnHeaders(columns)}
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