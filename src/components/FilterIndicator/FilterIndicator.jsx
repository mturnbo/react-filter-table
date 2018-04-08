import React from 'react';
import PropTypes from 'prop-types';
import './FilterIndicator.scss';

const FilterIndicator = props => {
  return (
    <div className="filter-indicator-container">
      <div className="filter-indicator-label">{props.label}</div>
      <div className="filter-indicator-remove"><a href="#" onClick={props.removeFilterHandler}>x</a></div>
    </div>
  );
};

FilterIndicator.propTypes = {
  label: PropTypes.string.isRequired,
  removeFilterHandler: PropTypes.func.isRequired
};

export default FilterIndicator;
