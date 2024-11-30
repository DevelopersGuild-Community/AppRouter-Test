import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from './button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        className: { control: 'text' },
        onClick: { action: 'clicked' },
        disabled: { control: 'boolean' },
    },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Click Me',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled',
    disabled: true,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
    children: 'Custom Class',
    className: 'bg-red-500 hover:bg-red-400 focus-visible:outline-red-500',
};
