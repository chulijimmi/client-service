const gatsbyPlugins = require("./config/plugins/gatsbyPlugins")

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "streamboost",
  },
  plugins: [
    {
      resolve: gatsbyPlugins.emotion.resolve,
      options: gatsbyPlugins.emotion.options
    },
    {
      resolve: gatsbyPlugins.typescript.resolve,
      options: gatsbyPlugins.typescript.options
    },
    {
      resolve: gatsbyPlugins.pollyfill.resolve,
      options: gatsbyPlugins.pollyfill.options
    },
    {
      resolve: gatsbyPlugins.themeUI.resolve,
      options: gatsbyPlugins.themeUI.options
    }
  ],
};
