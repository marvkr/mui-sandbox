import type { Meta, StoryObj } from "@storybook/react"; // for type safety and autocompletion in TypeScript stories.

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

// metadata about component's stories
const meta = {
  title: "Example/Button", // (optional) controls where stories appear in sidebar
  component: Button,
  parameters: {
    // (optional) parameter to center component. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // Automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;

// Each named export is a story. Its contents specify how the story is rendered in addition to other configuration options.
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // arg = props, Args are inputs passed to the component
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    label: "Delete now",
    backgroundColor: "red",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
