const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/fragment.jsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "static"),
    publicPath: "/static/",
    filename: "fragment.js"
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: require("shared-vendor/manifest_16.12.0.json"),
      sourceType: "var"
    })
  ]
};
