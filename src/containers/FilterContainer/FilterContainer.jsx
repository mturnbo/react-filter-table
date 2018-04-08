import React from 'react';
import './FilterContainer.scss';
import TextFilter from '../../components/TextFilter';
import CheckFilter from '../../components/CheckFilter';

class FilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
  }

  handleFilterSubmit(e) {
    e.preventDefault();
    const filters = this.state.filters;
    this.setState({
      filters: [...this.state.filters, {field: e.target.field.value, value: e.target.filter.value}]
    });
  }

  render() {
    return (
      <div className="app-container">
        <h3>React Filters</h3>
        <hr />
        <div className="filter-container">
          <TextFilter field="first_name" label="First Name" handleSubmit={e => this.handleFilterSubmit(e)} />
          <TextFilter field="last_name" label="Last Name" handleSubmit={e => this.handleFilterSubmit(e)} />
          <CheckFilter field="gender" value="Male" label="Male" handleSubmit={e => this.handleFilterSubmit(e)} />
          <CheckFilter field="gender" value="Female" label="Female" handleSubmit={e => this.handleFilterSubmit(e)} />
        </div>
      </div>
    );
  }
}

export default FilterContainer;
