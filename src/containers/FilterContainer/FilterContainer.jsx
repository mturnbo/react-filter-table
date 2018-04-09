import React from 'react';
import './FilterContainer.scss';
import TextFilter from '../../components/TextFilter';
import CheckFilter from '../../components/CheckFilter';
import FilterIndicator from '../../components/FilterIndicator';
import DataTable from '../../components/DataTable';
import data from '../../../data/persons.json';

class FilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: Object.keys(data[0]),
      filteredData: data,
      filters: []
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.filters !== nextState.filters;
  }

  handleFilterSubmit(e) {
    e.preventDefault();
    const filters = this.state.filters;
    this.setState({
      filters: [...this.state.filters, {field: e .target.field.value, value: e.target.filter.value}]
    });
    this.filterData();
  }

  removeFilter(filter) {

  }

  filterData() {
    const filteredData = data.filter(row => {
      let match = true;
      this.state.filters.forEach(filter => match = row[filter.field] === filter.value);
      return match;
    });

    this.setState({
      filteredData: filteredData
    });
  }

  render() {
    const selectedFilters = this.state.filters.map(filter =>
      <FilterIndicator label={filter.field} removeFilterHandler={e => this.removeFilter(e)} />
    );

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
        <div>
          {selectedFilters}
        </div>
        <hr />
        <DataTable columns={this.state.columns} data={this.state.filteredData} />
      </div>
    );
  }
}

export default FilterContainer;
