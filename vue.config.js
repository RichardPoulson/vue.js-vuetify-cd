var path = require("path");

module.exports = {
  publicPath: "",
  outputDir: "dist",
  assetsDir: "assets",
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("svg-inline-loader").loader("svg-inline-loader");
  }
};
