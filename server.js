import demoApp from './app';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.js';

const port = 3000;
const compiler = webpack(webpackConfig);

demoApp.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
}));
demoApp.use(webpackHotMiddleware(compiler, {
  log: console.log, // eslint-disable-line no-console
}));
demoApp.listen(port,
               () => console.log('Listening on localhost:3000')); // eslint-disable-line no-console
