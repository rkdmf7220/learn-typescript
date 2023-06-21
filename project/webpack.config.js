import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  entry: "./src/app.ts",
  output: {
    filename: "app.js",
    path: path.resolve(dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  target: "web",
  mode: "development",
  devServer: {
    contentBase: path.resolve(dirname, "dist"),
    compress: true,
    hot: false,
    historyApiFallback: true,
    liveReload: true,
    open: true,
    port: 5500,
    watchContentBase: true,
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
    },
  },
};

export default config;
