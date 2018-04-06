import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import CheckFilter from '../src/components/CheckFilter';

storiesOf('CheckFilter', module)
  .add('renders', () => (
    <CheckFilter id="test" value="test" label="Filter" handleSubmit={action('filter submitted')} />
  ));
