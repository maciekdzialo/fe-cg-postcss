module.exports = {
  plugins: {
    "postcss-normalize": true,
    "postcss-mixins": {
      mixinsDir: "src/static/styles/mixins",
    },
    "postcss-custom-media": {
      preserve: false,
      importFrom: "src/static/styles/media.css",
    },
    "postcss-nesting": true,
    autoprefixer: true,
  },
};
