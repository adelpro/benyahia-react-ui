import React from "react";

import { ZCube } from "./ZCube";

export default {
  title: "Loaders/ZCube",
  component: ZCube,
};

const Template = (args) => <ZCube {...args} />;

export const Default = Template.bind({});
