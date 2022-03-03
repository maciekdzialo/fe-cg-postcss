const path = require("path");
const glob = require("glob");

const globalAssets = glob.sync(path.resolve(__dirname, "../src/**/*.+(ico|png|css)"));

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  typescript: { reactDocgen: false },
  core: {
    builder: "webpack5",
  },
  webpackFinal: async config => {
    config.entry = [...config.entry, ...globalAssets];

    return config;
  },
};
