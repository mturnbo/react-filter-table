import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import TextFilter from '../src/components/TextFilter';

storiesOf('TextFilter', module)
  .add('renders', () => (
    <TextFilter id="test" label="Filter" handleSubmit={action('filter submitted')} />
  ));
