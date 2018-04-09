import React from 'react';
import PropTypes from 'prop-types';
import './CheckFilter.scss';

const TextFilter = props => {
  return (
    <form className="check-filter" onSubmit={props.handleSubmit}>
      <input type="hidden" id="field" value={props.field} />
      <input type="checkbox" id="filter" value={props.value} />
      <label htmlFor="filter">{props.label}</label>
      <button type="submit"> Add Filter </button>
    </form>
  );
};

TextFilter.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default TextFilter;
