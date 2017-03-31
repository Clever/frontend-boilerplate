/* eslint-disable no-console */
// Hooks up demo boilerplate application with webpack's development server. Not essential for
// understanding how to code frontend codebases; just makes demo easier to run and update.

import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as webpackConfig from './webpack.config.js';

import demoApp from './backend';

const port = process.env.PORT || 3000;
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV === "development") {
  demoApp.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
  }));
  demoApp.use(webpackHotMiddleware(compiler, {
    log: console.log,
  }));
}
demoApp.listen(port, () => console.log(`Listening on localhost:${port}`));
