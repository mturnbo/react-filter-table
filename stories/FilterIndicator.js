import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import FilterIndicator from '../src/components/FilterIndicator';

storiesOf('FilterIndicator', module)
  .add('renders', () => (
    <FilterIndicator label="Filter" removeFilterHandler={action('filter removed')} />
  ));
