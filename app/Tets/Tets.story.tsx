import { Meta, StoryObj } from '@storybook/react';
import { Tets } from '.';

const meta = { title: 'app/Tets/Tets.story.tsx', component: Tets } satisfies Meta<typeof Tets>;

export default meta;

type Story = StoryObj<typeof meta>;

export const overview: Story = {
  args: {
  }
}g