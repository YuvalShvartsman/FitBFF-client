import type { Preview } from "@storybook/react";
import "../src/input.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#131f24",
        },
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
  },
};

export default preview;
