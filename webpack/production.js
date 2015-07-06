var webpack = require('webpack');
var _ = require('lodash');
var cfg =  require('./base.js');

cfg.plugins = _.union([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        }

    })
],cfg.plugins);

module.exports = cfg;

