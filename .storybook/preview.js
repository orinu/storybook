import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = [
  {
    name: "Iphone x",
    styles: {
      height: "812px",
      width: "375px",
    },
    type: "mobile",
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...MINIMAL_VIEWPORTS, ...customViewports },
  },
  backgrounds: {
    default: "green",
    values: [
      {
        name: "blue",
        value: "blue",
      },
    ],
  },
};
