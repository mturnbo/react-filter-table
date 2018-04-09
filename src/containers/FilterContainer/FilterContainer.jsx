import React from 'react';
import {union as _union} from 'lodash';
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
      filters: {}
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.filteredData !== nextState.filteredData;
  }

  addFilter(filter) {
    let filters = this.state.filters;
    filters[filter.field] = filters[filter.field] ? _union(filters[filter.field], [filter.value]) : [filter.value];
    this.setState({filters: filters});
  }

  removeFilter(filter) {
    let filters = this.state.filters;
    if (filters[filter.field]) {
      filters.splice(filters.indexOf(filter.value));
      this.setState({filters: filters});
    }
  }

  handleFilterSubmit(e) {
    e.preventDefault();
    const filter = {field: e .target.field.value, value: e.target.filter.value};
    this.addFilter(filter);
    this.filterData();
  }

  filterData() {
    console.table(this.state.filters);

    const filteredData = data.filter(row => {
      let rowMatch = [];
      Object.keys(this.state.filters).forEach(filterName => {
        rowMatch.push(this.state.filters[filterName].includes(row[filterName] ));
      });
      return rowMatch.every(v => v === true);
    });

    this.setState({filteredData: filteredData});
  }

  render() {
    const selectedFilters = Object.keys(this.state.filters).map((filter) => {
      this.state.filters[filter].map((val, index) => {
        <FilterIndicator key={index} field={filter}  value={val} removeFilterHandler={e => this.removeFilter(e)} />
      })
    });

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
