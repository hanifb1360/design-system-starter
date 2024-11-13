
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './index';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
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

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'small',
};