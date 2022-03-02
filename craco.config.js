const { ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  style: {
    postcss: {
      mode: POSTCSS_MODES.file,
    },
  },
  webpack: {
    configure: webpackConfig => {
      const glob = require("glob");
      const assets = glob.sync("./src/**/*.@(css|ico|png)");

      webpackConfig = {
        ...webpackConfig,
        entry: {
          main: ["./src/index.tsx", ...assets],
        },
      };

      return webpackConfig;
    },
  },
};
