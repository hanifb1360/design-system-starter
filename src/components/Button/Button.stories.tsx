import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './index';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
    'aria-pressed': { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    a11y: {
      disable: false,
    },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

export const Toggle = Template.bind({});
Toggle.args = {
  label: 'Toggle Button',
  'aria-pressed': false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};