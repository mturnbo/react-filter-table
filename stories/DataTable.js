import React from 'react';
import {storiesOf} from '@storybook/react';
import DataTable from '../src/components/DataTable';
import data from '../data/persons.json';

const columns = Object.keys(data[0]);

storiesOf('DataTable', module)
  .add('with data', () => (
    <DataTable columns={columns} data={data} />
  ));
