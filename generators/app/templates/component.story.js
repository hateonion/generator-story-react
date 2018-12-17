import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import {
  <%= componentName %>
} from '<%= packageName %>';

storiesOf('ui/<%= componentName %>', module)
  .add(
    'description here',
    withInfo(`
        info here
        `)(() => (
          <div>
          <<%= componentName %> />
          </div>
        ))
  );
