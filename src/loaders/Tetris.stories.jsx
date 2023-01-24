import React from "react";

import { Tetris } from "./Tetris";

export default {
  title: "Loaders/Tetris",
  component: Tetris,
};

const Template = (args) => <Tetris {...args} />;

export const Default = Template.bind({});
