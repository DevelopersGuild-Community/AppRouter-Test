import { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './login-form';

const meta = {
  title: 'Components/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const overview: Story = {
  parameters: {
    errorMessage: undefined,
    dispatch: () => {
      return
    }
  }
}