const path = require("path");
const babelOptions = require("./babel/babel.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const getPath = (pathName) => {
  return path.join(__dirname, pathName);
};

const PATHS = {
  SOURCE_DIR: getPath("src"),
  BUILD_DIR: getPath("build"),
  THEME_DIR: getPath("theme"),
};

const commonConfig = {
  entry: path.resolve(PATHS.SOURCE_DIR, "index.js"),
  target: "web",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json", ".css", ".scss"],
    alias: {
      rb3198: PATHS.SOURCE_DIR,
      theme: PATHS.THEME_DIR,
    },
  },
  optimization: {
    minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader }, // to create a CSS file
          { loader: "css-loader", options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" }, // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions,
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|gif|pdf|.ico)$/,
        type: "asset/resource",
      },
    ],
  },
  stats: {
    loggingDebug: ["sass-loader"],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],
};

module.exports = {
  PATHS,
  commonConfig,
};