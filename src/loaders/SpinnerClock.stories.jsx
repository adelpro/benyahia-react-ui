import React from "react";

import { SpinnerClock } from "./SpinnerClock";

export default {
  title: "Loaders/SpinnerClock",
  component: SpinnerClock,
};

const Template = (args) => <SpinnerClock {...args} />;

export const Default = Template.bind({});
