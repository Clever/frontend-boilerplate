const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'core-js',
    'isomorphic-fetch',
    path.join(__dirname, 'demo/index.ts'),
  ],
  output: {
    path: path.join(__dirname, '__build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(eot|woff|svg|ttf|png)$/,
        loader: 'url-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

