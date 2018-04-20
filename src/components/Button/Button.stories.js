import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import backgrounds from "@storybook/addon-backgrounds";

import Button from './Button';

storiesOf('Button Custom', module)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([
    { name: "light blue", value: "#a0fcff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .addDecorator(checkA11y)
  .add(
    'default',
    withNotes('A very simple button')(
      () => <Button onClick={action('clicked')} text={text('Button text', 'Hello Button')} />
    )
  )
  .add('simple info',
    withInfo(`
      description or documentation about my Button, supports markdown
    
      ~~~js
      <Button
        onClick={() => {}}
        text="Test"
      />
      ~~~
    
    `)(() =>
      <Button onClick={action('clicked')} text={text('Button text', 'Hello Button')} />
    )
  )
