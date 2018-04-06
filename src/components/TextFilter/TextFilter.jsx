import React from 'react';
import PropTypes from 'prop-types';
import './TextFilter.scss';

const TextFilter = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label for={props.id}>{props.label}</label>
      <input type="text" id={props.id} />
      <button type="submit"> Add Filter </button>
    </form>
  );
};

TextFilter.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default TextFilter;
