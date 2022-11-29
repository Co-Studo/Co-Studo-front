/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8801,
    historyApiFallback: true,
    host: 'localhost',
    static: {
      directory: path.join(__dirname, '..', 'public'),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
