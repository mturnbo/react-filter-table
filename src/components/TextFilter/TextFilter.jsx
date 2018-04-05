import React from 'react';
import PropTypes from 'prop-types';
import './TextFilter.scss';

class TextFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label for={this.props.id}>{this.props.label}</label>
        <input type="text" id={this.props.id} />
        <button type="submit"> Add Filter </button>
      </form>
    );
  }
}

export default TextFilter;
