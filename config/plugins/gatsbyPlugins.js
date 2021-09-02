//Emotion JS plugins
const emotion = {
  resolve: `gatsby-plugin-emotion`,
  options: {
    // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
    // The values for each key in this example are the defaults the plugin uses.
    sourceMap: true,
    autoLabel: 'dev-only',
    labelFormat: `[local]`,
    cssPropOptimization: true,
  },
};

//Typescript plugins
const typescript = {
  resolve: `gatsby-plugin-typescript`,
  options: {
    isTSX: true, // defaults to false
    jsxPragma: `jsx`, // defaults to "React"
    allExtensions: true, // defaults to false
  },
};

//Polyfill ie11 plugins
const pollyfill = {
  resolve: `gatsby-plugin-polyfill-io`,
  options: {
    features: [`Array.prototype.map`, `fetch`],
  },
};

//Theme UI
const themeUI = {
  resolve: `gatsby-plugin-theme-ui`,
  options: {
    prismPreset: 'night-owl',
    preset: '@theme-ui/preset-funk',
  },
};

module.exports = {
  emotion,
  typescript,
  pollyfill,
  themeUI,
};
