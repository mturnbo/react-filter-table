import React from 'react';
import PropTypes from 'prop-types';
import './CheckFilter.scss';

const TextFilter = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="checkbox" id={props.id} value={props.value} />
      <label htmlFor={props.id}>{props.label}</label>
      <button type="submit"> Add Filter </button>
    </form>
  );
};

TextFilter.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default TextFilter;
