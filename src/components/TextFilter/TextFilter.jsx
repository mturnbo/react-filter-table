import React from 'react';
import PropTypes from 'prop-types';
import './TextFilter.scss';

const TextFilter = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="hidden" id="field" value={props.field} />
      <label htmlFor="filter">{props.label}</label>
      <input type="text" id="filter" />
      <button type="submit"> Add Filter </button>
    </form>
  );
};

TextFilter.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default TextFilter;
