import React from 'react';
import PropTypes from 'prop-types';
import './FilterIndicator.scss';

const FilterIndicator = props => {
  const label = `${props.field} - ${props.value}`;
  return (
    <div className="filter-indicator-container">
      <div className="filter-indicator-label">{label}</div>
      <div className="filter-indicator-remove"><a href="#" data-field={props.field} data-value={props.value} onClick={props.removeFilterHandler}>x</a></div>
    </div>
  );
};

FilterIndicator.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  removeFilterHandler: PropTypes.func.isRequired
};

export default FilterIndicator;
